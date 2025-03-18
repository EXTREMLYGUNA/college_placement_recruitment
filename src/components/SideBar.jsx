/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

function SideBar() {
  return <>
    <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion" id="accordionSidebar">

<Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center" >
    <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-graduation-cap"></i>
    </div>
    <div className="sidebar-brand-text mx-3">RECRUITMENT</div>
</Link>

<hr className="sidebar-divider my-0"/>

<li className="nav-item active">
    <Link to='/dashboard' className="nav-link" >
        <i className="fas fa fa-briefcase"></i>
        <span>Dashboard</span></Link>
</li>

<hr className="sidebar-divider"/>

<div className="sidebar-heading">
    Interface
</div>

<div className="nav-item">
    <Link to='/student' className="nav-link">
        <i className="fas  fa-address-book"></i>
        <span className='student' >Student and Application Management</span>
    </Link>
    
</div>

<div className="nav-item">
    <Link to='/schedule' className="nav-link">
        <i className="fas fa-calendar"></i>
        <span className='student'>Interview Scheduling</span>
    </Link>
</div>

<div className="nav-item">
    <Link to='/company' className="nav-link">
        <i className="fas fa-child"></i>
        <span className='student'>Company Coordination</span>
    </Link>
</div>

<div className="nav-item">
    <Link to='/placement' className="nav-link">
        <i className="fas fa-fw fa-wrench"></i>
        <span className='student'>Placement Drives Management</span>
    </Link>
</div>

<div className="nav-item">
    <Link to='/status' className="nav-link">
        <i className="fas fa-folder-open"></i>
        <span className='student'>Recruitment Status Tracking</span>
    </Link>
</div>

<div className="nav-item">
    <Link to='/records' className="nav-link">
        <i className="fas fa-folder-open"></i>
        <span className='student'>Integration with Academic Records</span>
    </Link>
</div>

<div className="nav-item">
    <Link to='/database' className="nav-link">
        <i className="fas fa-database"></i>
        <span className='student'>Company Database Integration</span>
    </Link>
</div> 

<div className="nav-item">
    <Link to='/interface/:id' className="nav-link">
        <i className="fas fa fa-user"></i>
        <span className='student'>User Interface</span>
    </Link>
</div> 

<div className="nav-item">
    <Link to='/reports' className="nav-link">
        <i className="fas fa-pencil-square"></i>
        <span className='student'>Reports and Analytics</span>
    </Link>
</div>

</ul>
  </>
}

export default SideBar