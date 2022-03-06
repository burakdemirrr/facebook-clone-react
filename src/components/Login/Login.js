import React, { useState } from 'react'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import "./Login.css"
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducer';
import { toast } from 'react-toastify';


const Login = () => { 
  const dispatch=useDispatch();
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width:"29%",
      padding:" 5px 15px",
      boxShadow: "0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      transition:"450ms",
      height:"450px",
    },
    
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [mail,setMail]=useState("");
  const [passw,setPassw]=useState("");

  const [modalName,setModalName]=useState("");
  const [modalMail,setModalMail]=useState("");
  const [modalPassw,setModalPassw]=useState("");
  const [photoUrl,setPhotoUrl]=useState("");

  const auth=getAuth();
  const navigate=useNavigate();

    const register=async (e)=>{
      e.preventDefault();
      if(!modalName || !photoUrl || !modalMail || !modalPassw){
        return toast.error("All fields must be entered.")
      }


      await createUserWithEmailAndPassword(auth,modalMail,modalPassw)
      .then(()=>{
        updateProfile(auth.currentUser,{
          displayName:modalName,
          photoURL:photoUrl
        })
        .then(()=>{
          dispatch(login({
            email:modalMail,
            displayName:modalName,
            photoURL:photoUrl,
          }))
        })
        navigate("/home")
      }).catch(err=>alert(err));
    }

    const logintoApp=(e)=>{
      e.preventDefault();

      signInWithEmailAndPassword(auth,mail,passw)
      .then((userAuth)=>{
          dispatch(login({
              email:userAuth.user.email,
              uid:userAuth.user.uid,
              displayName:userAuth.user.displayName,
              photoURL:userAuth.user.photoURL
          }))
          navigate("/home")
      }).catch(err=>alert(err))
  };


  return (
    <div className="login">

      <div className="login__left">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="" />
        <h3>Facebook tanıdıklarınla iletişim kurmanı ve hayatında olup bitenleri paylaşmanı sağlar.</h3>
      </div>

      <div className="login__right">
      
      <form onSubmit={logintoApp} >

        <input type="email" placeholder="E-posta veya Telefon Numarası" value={mail} onChange={e=>setMail(e.target.value)} />
        <input type="password" placeholder="Şifre" value={passw} onChange={e=>setPassw(e.target.value)} />
        <button>Giriş Yap</button>

        <a href="#">Şifreni mi Unuttun?</a>
        <hr className="aa"/>

      </form>
  <button onClick={openModal} className="modl">Yeni Hesap Oluştur</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        portalClassName="modal"
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h1>Kaydol</h1>
        <p>Hızlı ve Kolaydır</p>

    <hr></hr>

      <form onSubmit={register}>
        <div className="abe">
        <input type="name" placeholder='Adın' value={modalName} onChange={e=>setModalName(e.target.value)} />
         <input type="password" placeholder="Şifre"  value={modalPassw} onChange={e=>setModalPassw(e.target.value)}/>
</div>
<input type="email" placeholder="Cep telefonu numarası veya e-posta"  value={modalMail} onChange={e=>setModalMail(e.target.value)} className="meail"/>
<input type="text" placeholder="Fotoğraf Url'i" value={photoUrl} onChange={e=>setPhotoUrl(e.target.value)}/>


       
        <p className="lastp">Kaydol düğmesine tıklayarak, Koşullarımızı, Veri İlkemizi ve Çerezler İlkemizi <br></br>kabul etmiş olursun. Bizden SMS Bildirimleri alabilir ve bu bildirimleri istediğin<br></br> zaman durdurabilirsin.</p>
       
        <button>Kaydol</button>
       </form>
      </Modal>
      </div>


  )
}

export default Login