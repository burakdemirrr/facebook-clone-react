import React from 'react'
import "./Sidebar.css"
const SidebarIcon = ({title,icon}) => {
  return (
    <div className='sidebar__icon'>
        {icon}
        <p>{title}</p>
    </div>
  )
}

export default SidebarIcon