/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import TopBar from './TopBar'
import Table from 'react-bootstrap/Table';
import {api} from '../service/apiService';
import toast from 'react-hot-toast';
import ApiRoutes from '../utils/apiRoutes';
import SideBar from './SideBar';

function CompanyDatabaseIntegration() {
  let [data,setData] = useState()
  let getData = async () =>{
    try {
      const {path,authenticate} = ApiRoutes.GET_ALL_LOGIN
      let response = await api.get(path,{authenticate})

      setData(response.data)
    } catch (error) {
      if(error.response.status===401)
      toast.error(error.response.message)
    }
  }

  useEffect(()=>{
    getData()
  })

  return (<><SideBar/>
    <div style={{marginLeft:"30px"}} >
      <TopBar/>
      <h1>Company Data base Integration</h1>
      <h3 style={{color:"Blue",fontFamily:"fantasy"}} >Login credentials</h3>
      <Table striped bordered hover style={{height:'100px'}} >
      <thead>
        <tr>
          <th style={{color:"red"}} >Id</th>
          <th style={{color:"red"}} >Name</th>
          <th style={{color:"red"}} >Email</th>
          <th style={{color:"red"}} >Mobile</th>
          <th style={{color:"red"}} >Status</th>
          <th style={{color:"red"}} >Role</th>
        </tr>
      </thead>
      <tbody>
        {
          data?.map((e)=>{
            return <tr key = {e.value} >
              <td style={{color:"green"}} >{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.status?<><p style={{color:"green"}} >Active</p></> : <><p style={{color:"red"}} >In-Active</p></> }</td>
              <td>{e.role}</td>
            </tr>
          })
        }
      </tbody>
    </Table>
    </div>
    
    </>)
}

export default CompanyDatabaseIntegration
