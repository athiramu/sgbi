import React from 'react'
import './InnerNavbar.css'
import { RiGalleryFill, RiGalleryView2 } from "react-icons/ri";
import { MdFeed } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { Link } from 'react-router-dom';

function InnerNavbar() {

  const members = [
    'https://via.placeholder.com/40?text=1',
    'https://via.placeholder.com/40?text=2',
    'https://via.placeholder.com/40?text=3',
    'https://via.placeholder.com/40?text=4',
    'https://via.placeholder.com/40?text=5',
    'https://via.placeholder.com/40?text=6',
    'https://via.placeholder.com/40?text=7'
  ];

  // Render profile pictures directly in the navbar
  const renderProfilePictures = () => (
    <div className="profile-pictures">
      {members.map((member, index) => (
        <img key={index} src={member} alt={`Profile ${index + 1}`} className="profile-pic" />
      ))}
    </div>
  );
  return (
    <>
<nav class="navbar navbar-expand-lg nav_background">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 d-flex justify-content-center">
        <li class="nav-item">
          <a class="nav-link active nav_color"  href="#"><RiGalleryFill className='me-1'/>Backlog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active ms-3" href="#"><RiGalleryView2 className='me-1'/>Board</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active ms-3" href="#"><MdFeed className='me-1'/>
          Feed</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active ms-3" href="#"><TbReportSearch className='me-1'/>
          Reports</a>
        </li>
      </ul>
    </div>
  </div>
</nav>


<nav className="navbar mt-3 nav_sec_color">
      <div className="d-flex align-items-center">
        <span className="navbar-brand mb-0 h1">Product Design Team</span>
        <button type="button" className="btn btn-primary btn_color ml-3">Sprint 9</button>
        </div>
        <div className="d-flex align-items-end">
          <div className="ml-auto">
            {renderProfilePictures()}
          </div>
          <Link to="/" className=' new_member'> + New Member</Link>
        </div>
     
    </nav>
    </>
  )
}

export default InnerNavbar
