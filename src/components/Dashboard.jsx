/* eslint-disable no-unused-vars */
import React ,{useContext, useEffect, useState}from 'react'
import TopBar from './TopBar'
import Table from 'react-bootstrap/esm/Table'
import {UserContext} from '../App.jsx';
import SideBar from './SideBar.jsx';
import ApiRoutes from '../utils/apiRoutes.jsx';
import { api1 } from '../service/apiService.jsx';
import toast from 'react-hot-toast';


function Dashboard() {
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


  return (<><SideBar/>
    <div className='p-3'>
      <TopBar/>
      <h1>Dashboard</h1>
      <div className="d-sm-flex align-items-center justify-content-between mb-4 btn btn-success">
              <h1 className="h3 mb-0 text-black-100">Submitted List</h1>
     </div>
     <div className="container-fluid" style={{display:'inline-block',width:'500px'}}>
          <div className='row'>
            <Table striped bordered hover style={{height:'100px'}}>
                <thead>
                <tr >
                    <th style={{color:"red"}} >Unique id</th>
                    <th style={{color:"red"}} >Name</th>
                    <th style={{color:"red"}} >Email</th>
                </tr>
                </thead>
                <tbody>
                {
                    data?.map((e)=>{
                        return <>
                        <tr data={e} key={e.i}>
                        <td style={{color:"blue"}} >{e.id}</td>
                        <td style={{color:"green"}} >{e.name}</td>
                        <td style={{color:"green"}} >{e.email}</td>
                        </tr>
                        </>
                    }) 
                }
                </tbody>
            </Table>

          </div>
             </div>
    </div>
    </>)
}

export default Dashboard
