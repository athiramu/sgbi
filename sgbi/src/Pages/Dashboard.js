import React from 'react'
import Header from '../Components/Dashboard/Header/Header'
import Sidebar from '../Components/Dashboard/sidebar/Sidebar'
import Home from '../Components/Dashboard/Home/Home'


function Dashboard() {
  return (
    <>
    <div className='app '>
    <Header/>
    <Sidebar/>
    <Home/>
 
    </div>
    </>
  )
}

export default Dashboard