/* eslint-disable no-unused-vars */
import React,{useContext,useEffect} from 'react'
import TopBar from './TopBar'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { findIndexById } from '../helper.js';
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../App.jsx';
import toast from 'react-hot-toast'
// import ApiRoutes from '../utils/apiRoutes.jsx';
// import api from '../service/apiService.jsx';

function RecruitmentStatusTracking() {
  let {user,setUser} = useContext(UserContext)

  const handledelete = (id)=>{
    let index = findIndexById(user,id)
    if(index!==-1)
    {
        user.splice(index,1)
        setUser([...user])
        toast.error("Deleted successfully")
        navigate('/reject')
    }
    else
    {
        alert("Invalid id")
    }
}

let navigate = useNavigate()

// let getData = async()=>{
//   try {
//     const {path,authenticate} = ApiRoutes.GET_ALL_USERS
//     let response = await api.get(path,{authenticate})
//     setUser(response.data)
//   } catch (error) {
//     console.log(error)
//   }
// }

// useEffect(()=>{
//   getData()
// },[])
  
  return (
    <div>
      <TopBar/>
      <h1>Recruitment Status Tracking</h1>
      <div className="container-fluid" style={{display:'inline-block',width:'110%'}}>
          <div className='row p-3'>
            <Table striped bordered hover style={{height:'100px'}}>
                <thead>
                <tr>
                    <th style={{color:"red"}} >S.No</th>
                    <th style={{color:"red"}} >Name</th>
                    <th style={{color:"red"}} >Email</th>
                    <th style={{color:"red"}} >Date Of Birth</th>
                    <th style={{color:"red"}} >Age</th>
                    <th style={{color:"red"}} >Address</th>
                    <th style={{color:"red"}} >Resume</th>
                    <th style={{color:"red"}} >Gender</th>
                    <th style={{color:"red"}} >Status</th>
                    <th style={{width:'200px',color:"red"}}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    user.map((e)=>{
                        return <>
                        <tr data={e} key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td>{e.birth}</td>
                        <td>{e.age}</td>
                        <td>{e.address}</td>
                        <td>{e.resume}</td>
                        <td>{e.gender}</td>
                        <td>{e.status?<><p style={{color:"green"}} >Active</p></> : <><p style={{color:"red"}} >In-Active</p></> }</td>
                        <td style={{display:"flex"}} >
                            <Button variant='white' onClick={()=>navigate(`/shortlist`)} ><img title='shortlist' src='https://img.icons8.com/?size=100&id=70933&format=png&color=000000' style={{width:'40px',height:'40px'}}/></Button>
                            &nbsp;&nbsp;
                            <Button variant='white' onClick={()=>navigate(`/interface/${e.id}`)} ><img title='view and edit' src='https://icon-library.com/images/icon-view/icon-view-11.jpg' style={{width:'40px',height:'40px'}}/></Button>
                            &nbsp;&nbsp;
                            <Button variant='white' onClick={()=>handledelete(e.id)}><img title='delete' src='https://icon-library.com/images/remove-icon/remove-icon-21.jpg' style={{width:'40px',height:'40px'}} /></Button>
                        </td>
                        </tr>
                        </>
                    }) 
                }
                </tbody>
                <div style={{display:"flex",position:"absolute"}} ><Button variant='primary' onClick={()=>navigate('/reports')} >Check reports graph</Button></div>
            </Table>
            
          </div>
             </div>
    </div>
  )
}

export default RecruitmentStatusTracking
