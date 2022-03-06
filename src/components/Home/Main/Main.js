import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/reducer'
import "./Main.css"
import VideoCallIcon from '@mui/icons-material/VideoCall';
import PhotoIcon from '@mui/icons-material/Photo';
import MoodIcon from '@mui/icons-material/Mood';
import Fade from 'react-reveal/Fade';
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db, storage } from '../../../tools/firebase'
import DeleteIcon from '@mui/icons-material/Delete';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import { green, pink, yellow } from '@mui/material/colors'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

const Main = () => {
  const user=useSelector(selectUser);
  const [title,setTitle]=useState('');
  const [image,setImage]=useState("");
  const [posts,setPosts]=useState([]);
  const [arl,setArl]=useState("");


  useEffect(()=>{
    const q=query(collection(db,"users"),orderBy('timestamp','desc'));
    const unsub=onSnapshot(q,(querySnapshot ) =>{
      let postArray=[];
      querySnapshot.forEach(doc=>{
        postArray.push({...doc.data(),id:doc.id})
      })
      setPosts(postArray);

    });
    return ()=>unsub();
},[]);

  const uploadFiles=(file)=>{
    if(!file) return;

    const storageRef=ref(storage,`/files/${file.name}`);
    const uploadTask=uploadBytesResumable(storageRef,file);

    uploadTask.on("state_changed",(snapshot)=>{
      const prog=Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);

    },
    (err)=>console.log(err),
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref)
      .then(url=>setArl(url))
      console.log(arl);
    }
    
    )
  }

  const addPost=async (e)=>{
    e.preventDefault();
    const file=image;
    uploadFiles(file);
    if(!title ){
      return alert("You cant post empty!");
    }
    await addDoc(collection(db,"users"),{
      name:user.displayName,
      email:user.email,
      title,
      photoURL:user.photoURL,
      timestamp:serverTimestamp(),
      resm:arl
    })
    setTitle("");
    setImage("");
  }
  const deletePost=async(id)=>{
    await deleteDoc(doc(db,"users",id));
  };
  console.log(posts);

  return (
    <div className="main">
      <form className="add_post" onSubmit={addPost}>
        <div className="post_top">
          <img src={user.photoURL} alt="" />
        <input type="text" className="text_input" placeholder={`Ne Düşünüyorsun , ${user?.displayName}?`} value={title} onChange={e=>setTitle(e.target.value)} />  
        <input type="file" className="file_input" onChange={e=>setImage(e.target.files[0])} />
        </div>  
        <hr className="rr"/>
        <div className="post_bottom">
            <div className="box">
              <VideoCallIcon  sx={{ width: 35, height: 35,color: pink[500]}}/>
              <p>Canlı Video</p>
            </div>  
            <div className="box">
              <PhotoIcon  sx={{ width: 35, height: 35,color:green[500] }}/>
              <p>Fotoğraf/video</p>
            </div>

            <div className="box">
              <MoodIcon  sx={{ width: 35, height:35,color:yellow[700]}}/>
              <p>His/Hareket</p>
            </div>
        </div>
        
      </form>
        
      <div className="post_container">
        {posts && posts.map((post)=>(<Fade>
            <div key={post.id} className="entry">
              <div className="ta">
              <div className="entry_top">
              <img src={post.photoURL} alt=""  />

              <div className="entry_inner">
                <h2>{post.name}</h2>  
                <p>{new Date(post.timestamp?.toDate()).toUTCString()}</p>
              </div>
                </div>
              <DeleteIcon className="delete" onClick={()=>deletePost(post.id)}/>
          </div>
            <div className="entry_mid">
              <p>{post.title}</p>
              <img  className="post_img"  src={post.resm} alt=""/>
              
              </div>
              <hr className="rara"></hr>
              <div className="post_bottom">
                
            <div className="box">
              <ThumbUpIcon  sx={{ width: 35, height:25}}/>
              <p>Beğen</p>
            </div>  
            <div className="box">
              <ChatBubbleOutlineIcon  sx={{ width: 35, height: 25 }}/>
              <p>Yorum Yap</p>
            </div>

            <div className="box">
              <ReplyIcon  sx={{ width: 35, height:25}}/>
              <p>Paylaş</p>
            </div>
        </div>
              
            </div></Fade>

        ))}
        
        </div>

    </div>
  )
}

export default Main