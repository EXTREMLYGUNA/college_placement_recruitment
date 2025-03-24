/* eslint-disable no-unused-vars */
import React ,{useContext}from 'react'
import TopBar from './TopBar.jsx'
import Table from 'react-bootstrap/esm/Table'
import {UserContext} from '../App.jsx';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';


function Reject() {
  let {user,setUser} = useContext(UserContext)
  const navigate = useNavigate()

  return (
    <div className='p-3'>
      <TopBar/>
      <Button variant='primary' onClick={()=>navigate('/status')} >Back</Button>
      <h1>User Interface Management</h1>
      <nav className='card' >
               <div className='details'>
                    <div><Link to='/interface/:id'       className='all'>VIEW & EDIT  </Link></div>
                    <div><Link to='/shortlist'  className='all'>SHORTLIST    </Link></div>
                    <div><Link to='/reject'     className='all'>REJECT       </Link>
                    <div className="d-sm-flex align-items-center justify-content-between mb-4 btn btn-danger">
              <h1 className="h3 mb-0 text-black-100" >Reject List</h1>
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
               </div>
         </nav>
    </div>
  )
}

export default Reject
