/* eslint-disable no-unused-vars */
import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import useLogout from '../service/useLogout'
import { useNavigate } from 'react-router-dom'
import Login from './Login'

function SideBar() {
    let logout = useLogout()
    let navigate = useNavigate()
//     let options = [
//         {
//         value:"Dashboard",
//         path:"/",
//         role:["Student","Admin"]
//     },
//     {
//         value:"Student and Application Management",
//         path:"/",
//         role:["Student","Admin"]
//     },
//     {
//         value:"Interview Scheduling",
//         path:"/",
//         role:["Student","Admin"]
//     },
//     {
//         value:"Company Coordination",
//         path:"/",
//         role:["Admin"]
//     },
//     {
//         value:"Placement Drives Management",
//         path:"/",
//         role:["Admin"]
//     },
//     {
//         value:"Recruitment Status Tracking",
//         path:"/",
//         role:["Student","Admin"]
//     },
//     {
//         value:"Integration with Academic Records",
//         path:"/",
//         role:["Admin"]
//     },
//     {
//         value:"Company Database Integration",
//         path:"/",
//         role:["Admin"]
//     },
//     {
//         value:"User Interface",
//         path:"/",
//         role:["Student","Admin"]
//     },
//     {
//         value:"Reports and Analytics",
//         path:"/",
//         role:["Admin"]
//     },
// ]


  return <>
  <div className='tortle' >
    <ul className="navbar-nav bg-gradient-success sidebar sidebar-dark accordion " id="accordionSidebar" style={{display:"flex",height:"100vw",position:'inherit'}}>

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
    Interfaces
</div>

<div className="nav-item">
    <Link to='/studentCreates' className="nav-link">
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
    <Link to='/database/loginData' className="nav-link">
        <i className="fas fa-database"></i>
        <span className='student'>Company Database Integration <b style={{color:'red'}}>Login Data</b></span>
    </Link>
</div> 

<div className="nav-item">
    <Link to='/database/userData' className="nav-link">
        <i className="fas fa-database"></i>
        <span className='student'>Company Database Integration <b style={{color:'red'}}>Users Data</b></span>
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

<div>
<Button onClick={()=>navigate('/login')+logout()} variant='danger' style={{paddingBottom:'9px',display:'flex',position:'absolute',marginLeft:'70px'}}>Logout</Button>
</div>

</ul>
</div>
  </>
}

export default SideBar