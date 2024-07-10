import React from 'react';
import logo from '../../../images/image1.png';
import { Link } from 'react-router-dom';
import { BiSolidShoppingBags } from "react-icons/bi";
import { GrTask } from "react-icons/gr";
import { GrSettingsOption } from "react-icons/gr";
import { BsClockFill } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";
import { PiUsersThreeBold } from "react-icons/pi";
import { RxDashboard } from "react-icons/rx";
import { GrVirtualStorage } from "react-icons/gr";
import './Sidebar.css';

function Sidebar({ openSidebarToggle, openSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={logo} style={{ width: 100 }} alt="Logo" />
        </div>
        <span className='icon close_icon' onClick={openSidebar}>x</span>
      </div>
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/dashboard" className='no-text-decoration'>
            <RxDashboard className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/projects" className='no-text-decoration'>
            <BiSolidShoppingBags className='icon' /> Projects
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/task" className='no-text-decoration'>
            <GrTask className='icon' /> Tasks
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/dashboard" className='no-text-decoration'>
            <GrSettingsOption className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/timelog" className='no-text-decoration'>
            <BsClockFill className='icon' /> Time log
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/resource-mgnt" className='no-text-decoration'>
            <VscRepoForked className='icon' /> Resource mgnt
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/users" className='no-text-decoration'>
            <PiUsersThreeBold className='icon' /> Users
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/project-templates" className='no-text-decoration'>
            <GrVirtualStorage className='icon' /> Project Templates
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
