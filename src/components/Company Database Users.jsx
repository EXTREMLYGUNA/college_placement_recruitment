/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import Table from 'react-bootstrap/Table';
import {api1} from '../service/apiService';
import toast from 'react-hot-toast';
import ApiRoutes from '../utils/apiRoutes';
import SideBar from './SideBar';
import  Button  from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { findIndexById } from '../helper';

function CompanyDatabaseUsers() {
    let navigate = useNavigate()
    const [isSubmitting,setIsSubmitting] = useState()
    let [data,setData] = useState()
  let getData = async () =>{
    try {
      const {path,authenticate} = ApiRoutes.COLLECT_ALL_USERS
      let response = await api1.get(path,{authenticate})

      setData(response.data)
    } catch (error) {
      if(error.response.status===401)
      toast.error(error.response.message)
    }
  }


  useEffect(()=>{
    getData()
  })

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
      return;
    }
    setIsSubmitting(true);
    
    try {
      const response = await api1.delete(`${ApiRoutes.DELETE_USER.path}/${id}`,{
          authenticate: ApiRoutes.DELETE_USER.authenticate});
      
      toast.success(response.data.message);
      navigate('/database/userData');
    } catch (error) {
      console.error('Delete error:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message
      });
      toast.error(error.response?.data?.message || 'Failed to delete user');
    } finally {
      setIsSubmitting(false);
    }
  };


  
  return (<><SideBar/>
  <div style={{marginLeft:"30px"}} >
      <TopBar/>
      <h1>Company Data base Integration</h1>
      <h3 style={{color:"Blue",fontFamily:"fantasy"}} >Users credentials</h3>
      <Button variant='primary' onClick={()=>navigate('/dashboard')} >Back</Button>
      <Table striped bordered hover style={{height:'auto'}} >
      <thead >
        <tr>
          <th style={{color:"red",textAlign:'center'}} >Id</th>
          <th style={{color:"red",textAlign:'center'}} >Name</th>
          <th style={{color:"red",textAlign:'center'}} >Email</th>
          <th style={{color:"red",textAlign:'center',width:'100px'}} >Date of Birth</th>
          <th style={{color:"red",textAlign:'center'}} >mobile</th>
          <th style={{color:"red",textAlign:'center'}} >Age</th>
          <th style={{color:"red",textAlign:'center'}} >Address</th>
          <th style={{color:"red",textAlign:'center'}} >Uploaded Resume</th>
          <th style={{color:"red",textAlign:'center'}} >Gender</th>
          <th style={{color:"red",textAlign:'center'}} >UserId</th>
          <th style={{color:"red",textAlign:'center'}} >Status</th>
          <th style={{color:"red",textAlign:'center'}} >Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((e)=>{
            return <tr key = {e.value} >
              <td style={{color:"green"}} >{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td >{e.birth}</td>
              <td>{e.mobile}</td>
              <td>{e.age}</td>
              <td>{e.address}</td>
              <td>{e.resume}</td>
              <td>{e.gender}</td>
              <td style={{color:"blue"}} >{e.userId}</td>
              <td>{e.status?<><p style={{color:"green"}} >Active</p></> : <><p style={{color:"red"}} >In-Active</p></> }</td>
              <td style={{display:"flex"}} >
                            <Button variant='primary' onClick={()=>navigate(`/application/editUser/:id`)} >EDIT</Button>
                            &nbsp;&nbsp;
                            <Button variant='danger' onClick={handleDelete} disabled={isSubmitting} >{isSubmitting ? 'Deleting...' : 'DELETE'}</Button>
                            &nbsp;&nbsp;
                            <Button variant='warning' >SHORT LIST</Button>
                        </td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
  </>)
}

export default CompanyDatabaseUsers
