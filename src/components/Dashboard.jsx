/* eslint-disable no-unused-vars */
import React ,{useContext}from 'react'
import TopBar from './TopBar'
import Table from 'react-bootstrap/esm/Table'
import {UserContext} from '../App.jsx';


function Dashboard() {
  let {user,setUser} = useContext(UserContext)


  return (
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
                    <th>S.No</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    user.map((e)=>{
                        return <>
                        <tr data={e} key={e.i}>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        </tr>
                        </>
                    }) 
                }
                </tbody>
            </Table>

          </div>
             </div>
    </div>
  )
}

export default Dashboard
