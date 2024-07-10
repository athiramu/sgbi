import React from 'react';
import { BsJustify } from "react-icons/bs";
import { CgSearch } from "react-icons/cg";
import { FaBell } from "react-icons/fa";
import './Header.css';

function Header({ openSidebar }) {
  return (
    <>
      <header className='header'>
        <div className='menu-icon' onClick={openSidebar}>
          <BsJustify className='icon BsJustify' />
        </div>
        <div className='header-left'>
          <CgSearch className='icon' />
        </div>
        <div className='header-right'>
          <FaBell className='icon' />
        </div>
      </header>
    </>
  );
}

export default Header;
