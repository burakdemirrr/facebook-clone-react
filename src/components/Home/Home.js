import React from 'react'
import "./Home.css"
import Main from './Main/Main'
import Navbar from './Navbar/Navbar'
import Rightbar from './Rightbar/Rightbar'
import Sidebar from './Sidebar/Sidebar'

const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <div className="home-body">
      <Sidebar/>
      <Main/>
      <Rightbar/>
      </div>
    </div>
  )
}

export default Home