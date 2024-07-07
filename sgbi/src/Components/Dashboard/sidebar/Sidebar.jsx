import React from 'react'
import logo from '../../../images/image1.png'
import { Link } from 'react-router-dom'
import { BiSolidShoppingBags } from "react-icons/bi";
import { GrTask } from "react-icons/gr";
import { GrSettingsOption } from "react-icons/gr";
import { BsClockFill } from "react-icons/bs";
import { VscRepoForked } from "react-icons/vsc";
import { PiUsersThreeBold } from "react-icons/pi";
import { GrVirtualStorage } from "react-icons/gr";
import './Sidebar.css'
function Sidebar() {
    return (
        <aside id="sidebar">
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <img src={logo} style={{ width: 100 }} />
                </div>
                <span className='icon close_icon'>x</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="/projects" className='no-text-decoration'>
                        <BiSolidShoppingBags className='icon' /> Projects
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/tasks" className='no-text-decoration'>
                        <GrTask className='icon' /> Tasks
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/dashboard" className='no-text-decoration'>
                        <GrSettingsOption className='icon' /> Dashboard
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/timelog" className='no-text-decoration'>
                        <BsClockFill className='icon' /> Time log
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/resource-mgnt" className='no-text-decoration'>
                        <VscRepoForked className='icon' /> Resource mgnt
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/users" className='no-text-decoration'>
                        <PiUsersThreeBold className='icon' /> Users
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/project-templates" className='no-text-decoration'>
                        <GrVirtualStorage className='icon' /> Project Templates
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar