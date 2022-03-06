import React from 'react'
import Icon from '../Navbar/Icon'
import "./Rightbar.css"
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
const Rightbar = () => {

  return (
    <div className="rightbar">
        <p>Sponsorlu</p>
        <hr/>
        <div className="icon_container">
            <p>Kişiler</p>
            <div className="icons">
                <Icon icon={<OndemandVideoIcon/>} title="Yeni Oda"/>
                <Icon icon={<SearchIcon/> } title="Ara"/>
                <Icon icon={<MoreHorizIcon/> }title="Seçenekler"/>
            </div>
        </div>
        <div className="people">
        <div className="a">
                <Avatar sx={{ width: 41, height: 41 }}>C</Avatar>
                <p>Celal</p>
            </div>  
            <div className="a">
                <Avatar sx={{ width: 41, height: 41 }}>E</Avatar>
                <p>Emre</p>
            </div>  
            <div className="a">
                <Avatar sx={{ width: 41, height: 41 }}>F</Avatar>
                <p>Furkan</p>
            </div>  
            <div className="a">
                <Avatar sx={{ width: 41, height: 41 }}>B</Avatar>
                <p>Burkan</p>
            </div>
            <div className="a">
                <Avatar sx={{ width: 41, height: 41 }}>K</Avatar>
                <p>Kerim</p>
            </div>
            <div className="a">
                <Avatar sx={{ width: 41, height: 41 }}>T</Avatar>
                <p>Tarık</p>
            </div>
            <div className="a">
                <Avatar sx={{ width: 41, height: 41 }}>Ş</Avatar>
                <p>Şevval</p>
            </div>

        </div>

    </div>
  )
}

export default Rightbar