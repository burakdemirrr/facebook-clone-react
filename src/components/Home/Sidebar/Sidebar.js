import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../redux/reducer'
import "./Sidebar.css"
import SidebarIcon from './SidebarIcon'
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import HistoryIcon from '@mui/icons-material/History';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FlagIcon from '@mui/icons-material/Flag';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventIcon from '@mui/icons-material/Event';
import StarIcon from '@mui/icons-material/Star';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import StreamIcon from '@mui/icons-material/Stream';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';
import MessageIcon from '@mui/icons-material/Message';
import GamepadIcon from '@mui/icons-material/Gamepad';
import AnalyticsIcon from '@mui/icons-material/Analytics';
const Sidebar = () => {
    const user=useSelector(selectUser);
  return (
    <div className='sidebar'>
            <div className="a">
                <img src={user.photoURL} alt="" />
                <p>{user.displayName}</p>
            </div>  
        <SidebarIcon icon={<PeopleIcon color="primary" sx={{ width: 31, height: 41 }}/>} title="Arkadaşlar"/>
        <SidebarIcon icon={<GroupsIcon color="primary" sx={{ width: 31, height: 41 }}/>} title="Gruplar"/>
        <SidebarIcon icon={<StorefrontIcon color="primary" sx={{ width: 31, height: 41 }}/>} title="MarketPlace"/>
        <SidebarIcon icon={<OndemandVideoIcon  sx={{ width: 31, height: 41 }}/>} title="Watch"/>
        <SidebarIcon icon={<HistoryIcon color="primary" sx={{ width: 31, height: 41 }}/>} title="Anılar"/>
        <SidebarIcon icon={<BookmarkIcon color="secondary"   sx={{ width: 31, height: 41 }}/>} title="Kaydedilenler"/>
        <SidebarIcon icon={<FlagIcon  color="success"  sx={{ width: 31, height: 41 }}/>} title="Sayfalar "/>
        <SidebarIcon icon={<EventIcon color="primary" sx={{ width: 31, height: 41 }}/>} title="Etkinlikler"/>
        <SidebarIcon icon={<NewspaperIcon sx={{ width: 31, height: 41 }}/>} title="En Yeniler"/>
        <SidebarIcon icon={<StarIcon  sx={{ width: 31, height: 41,color:"yellow" }}/>} title="Favoriler"/>
        <SidebarIcon icon={<BloodtypeIcon sx={{ width: 31, height: 41,color:"red" }}/>} title="Bağış Kampanyaları"/>
        <SidebarIcon icon={<StreamIcon sx={{ width: 31, height: 41, }}/>} title="Canlı Videolar"/>
        <SidebarIcon icon={<CoronavirusIcon sx={{ width: 31, height: 41, color:"red"}}/>} title="Covid-19"/>
        <SidebarIcon icon={<MessageIcon sx={{ width: 31, height: 41,color:"blue" }}/>} title="Messenger"/>
        <SidebarIcon icon={<GamepadIcon sx={{ width: 31, height: 41}}/>} title="Oyun Oyna"/>
        <SidebarIcon icon={<AnalyticsIcon sx={{ width: 31, height: 41 }}/>} title="Analizler"/>
       
    </div>
)
}

export default Sidebar