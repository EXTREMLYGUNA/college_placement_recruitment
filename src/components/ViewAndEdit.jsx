/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState,useEffect,useContext} from 'react'
import TopBar from './TopBar.jsx'
import Form from 'react-bootstrap/Form'
import { useNavigate,useParams } from 'react-router-dom';
import {UserContext} from '../App.jsx';
import { findIndexById } from '../helper.js';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function ViewAndEdit() {
  let {user,setUser} = useContext(UserContext)
  
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [birth,setBirth] = useState('')
    const [mobile,setMobile] = useState()
    const [age,setAge] = useState('')
    const [address,setAddress] = useState('')
    const [resume,setResume] = useState('')
    const [gender,setGender] = useState('')
    const [status,setStatus] = useState()

    const navigate = useNavigate()
    const {id} = useParams()
    
    let index = findIndexById(user,Number(id))
  
    const handleSubmit = () =>{
          const data = {id:Number(id),name,email,birth,mobile,age,address,resume,gender,status} 
          user.splice(index,1,data)
          setUser([...user])

          navigate('/status')     
    }
    const getData = () =>{
        let index = findIndexById(user,Number(id))
        if(index!==-1)
        {
          setName(user[index].name)
          setEmail(user[index].email)
          setBirth(user[index].birth)
          setMobile(user[index].mobile)
          setAge(user[index].age)
          setAddress(user[index].address)
          setResume(user[index].resume)
          setGender(user[index].gender)
          setStatus(user[index].status)
        }
        }
      useEffect(()=>{
        if(id)
          getData()
      },[])
  
  return (
    <div >
      <TopBar/>
      <Button variant='primary' onClick={()=>navigate('/status')} >Back</Button>
      <h1>User Interface</h1>
      <nav className='card' >
         <div className='details'>
              <div><Link to='/interface/:id'       className='all'>VIEW & EDIT  </Link>
              <div id="content-wrapper" className="d-flex flex-column" style={{display:'flex',width:'1000px'}}>
          <div id="content">
              <div className="container-fluid">
                   <div className="row">
                       <div className="col-lg-7">
                           <div className="p-5">
                                 <Form onSubmit={handleSubmit} >
                                    <Form.Group className="mb-3" >
                                      <Form.Label>Name</Form.Label>
                                      <Form.Control type="text" id='name' name='name' value={name} placeholder="Enter your name" onChange={(e)=>setName(e.target.value)} required/>
                                    </Form.Group> 
                                    <Form.Group className="mb-3" >
                                      <Form.Label>Email</Form.Label>
                                      <Form.Control type="email" id='email' name='email' value={email} placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)} required/>
                                    </Form.Group> 
                                    <Form.Group className="mb-3" >
                                      <Form.Label>Date Of Birth</Form.Label>
                                      <Form.Control type="date" id='birth' name='birth' value={birth} onChange={(e)=>setBirth(e.target.value)} required />
                                    </Form.Group>    
                                    <Form.Group className="mb-3">
                                      <Form.Label>Mobile Number</Form.Label>
                                      <Form.Control type="number" id='mobile' placeholder="Enter your mobile number" name='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" >
                                      <Form.Label>Age</Form.Label>
                                      <Form.Control type="number" id='age' placeholder="Enter your Age" name='age' value={age} onChange={(e)=>setAge(e.target.value)} required/>
                                    </Form.Group>     
                                    <Form.Group className="mb-3" >
                                      <Form.Label>Address</Form.Label>
                                      <Form.Control type="text" id='address' placeholder="Enter your address" name='address' value={address} onChange={(e)=>setAddress(e.target.value)} required/>
                                    </Form.Group>       
                                    <Form.Group className="mb-3" >
                                      <Form.Label>Upload resume</Form.Label>
                                      <Form.Control type="file" id='resume' name='resume' value={setResume} onChange={(e)=>setResume(e.target.value)} required/>
                                    </Form.Group>                
                                    <Form.Group className="mb-3" >
                                    <Form.Label>Gender</Form.Label>
                                        <Form.Select value={gender} onChange={(e)=>setGender(e.target.value)} >
                                        <option value={'null'}   >Select Gender</option>
                                        <option value={'Male'}   >Male         </option>
                                        <option value={'Female'} >Female       </option>
                                        <option value={'Others'} >Others       </option>
                                        </Form.Select> 
                                      </Form.Group>                             
                                    <Form.Group className="mb-3" >
                                    <Form.Label>Status</Form.Label>
                                       <Form.Check type="checkbox" id='Active' checked={status}   label="Active"  name='Status' value={"Active"   } onChange={(e)=>setStatus(e.target.checked)} /> 
                                    </Form.Group> 
                                    <Button variant="primary" onClick = {()=>handleSubmit()}>
                                      Update
                                    </Button>
                                 </Form>
                              </div> 
                           </div>
                     </div>
                 </div>     
            </div>
       </div>
              </div>
              <div><Link to='/shortlist'  className='all'>SHORTLIST    </Link></div>
              <div><Link to='/reject'     className='all'>REJECT       </Link></div> 
         </div>
         <hr/>
      </nav> 
    </div>
  )
}

export default ViewAndEdit
