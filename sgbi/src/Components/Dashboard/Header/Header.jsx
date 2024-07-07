import React from 'react'
import { BsJustify } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import './Header.css'
function Header() {
  return (
    <>
    <header className='header'>
        <div className='menu-icon'>
        <BsJustify className='icon'/>
        </div>
        <div className='header-left'>
        <CgSearch className='icon'/>
        </div>
        <div className='header-right'>
        <FaBell className='icon'/>
        </div>
    </header>
    </>
  )
}

export default Header