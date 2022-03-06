import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import GroupsIcon from '@mui/icons-material/Groups';
import GamesIcon from '@mui/icons-material/Games';
import {  Avatar } from '@mui/material';
import Icon from './Icon';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../../../redux/reducer';
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { auth } from '../../../tools/firebase';
import {signOut} from "firebase/auth"
import { useNavigate } from 'react-router-dom';
import { blue, deepOrange } from '@mui/material/colors';
const Navbar = () => {
    const user=useSelector(selectUser);
    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleSignOut=async (e)=>{
        e.preventDefault();
        await signOut(auth);

        dispatch(logout());
        navigate("/")

    }
    console.log(user);
  return (
    <div className='navbar'>

        <div className="navbar__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
            <div className="input_container">
            <SearchIcon/>
            <input type="text" placeholder="Facebook'ta Ara" />
            </div>
        </div>

        <div className="navbar__middle">
           <Icon icon={<HomeIcon sx={{ width: 45, height: 59,color:"darkblue",borderBottom:"3px solid blue"}}/>} title="Ana Sayfa" />
           <Icon icon={<OndemandVideoIcon sx={{ width: 35, height: 35,color:"gray"}}/>} title="Watch" />
           <Icon icon={<StorefrontIcon sx={{ width: 35, height: 35,color:"gray"}}/>} title="Marketplace" />
           <Icon icon={<GroupsIcon sx={{ width: 35, height: 35,color:"gray"}}/>} title="Gruplar" />
           <Icon icon={<GamesIcon sx={{ width: 35, height: 35,color:"gray"}}/>} title="Oyun" />
        </div>

        <div className="navbar__right">
            <div className="a" onClick={handleSignOut} >
                <img src={user.photoURL} alt=""  />
                <p>{user?.displayName}</p>
            </div>  
            <Icon icon={<AppsIcon/>} title="Menü"/>
            <Icon icon={<MessageIcon/>} title="Messenger"/>
            <Icon icon={<NotificationsIcon/>} title="Menü"/>
            <Icon icon={<ArrowDropDownIcon />} title="Hesap"/>


        </div>
    </div>
  )
}

export default Navbar