/* eslint-disable no-unused-vars */
import React,{useState,useContext,useEffect} from 'react'
import TopBar from './TopBar'
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import {UserContext} from '../App.jsx';
import Button from 'react-bootstrap/Button'
import toast from 'react-hot-toast';
import ApiRoutes from '../utils/apiRoutes.jsx';
import api from '../service/apiService.jsx';


function StudentAndAppplication() {
  let {user,setUser} = useContext(UserContext)

  const [name,setName] = useState("")
  const [email,setEmail] = useState('')
  const [birth,setBirth] = useState("")
  const [mobile,setMobile]= useState("")
  const [age,setAge] = useState('')
  const [address,setAddress] = useState('')
  const [resume,setResume] = useState('')
  const [gender,setGender] = useState('')
  const [status,setStatus] = useState('')

  const navigate = useNavigate()

  

  //   const loadData = async ()=>{
  //   try {
  //     const {path,authenticate} = ApiRoutes.GET_ALL_USERS
  //     let response =await api.post(path,{authenticate})
      
  //     setUser(response.data)
  //   } catch (error) {
  //     if(error.response.status===401)
  //       toast.error(error.response.message)
  //   }
  // }

  // useEffect(()=>{
  //   loadData()
  // })

  const handleSubmit = () =>{
    const data = {name,email,birth,mobile,age,address,resume,gender,status} 
    data.id = user.length?user[user.length-1].id+1 : 1
    user.push(data)
    setUser([...user])
    toast.success("Created successfully")
    navigate('/status')     
}

  // {
  //   user.map((e)=>{
      return <div>
          <TopBar/>
          <h1>Student And Appplication Management</h1>
          <div id="content-wrapper" className="d-flex flex-column" style={{display:'inline-block', width:'1000px'}}>
              <div id="content">
                  <div className="container-fluid">
                       <div className="row">
                           <div className="col-lg-7">
                               <div className="p-5">
                                     <Form >
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
                                          <Form.Control type="file" id='resume' name='resume' value={resume} onChange={(e)=>setResume(e.target.value)} required/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" >
                                        <Form.Label>Gender</Form.Label>
                                            <Form.Select defaultValue={gender} onChange={(e)=>setGender(e.target.value)} >
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
                                          Apply
                                        </Button>
                                     </Form>
                              
                                  </div> 
                               </div>
                         </div>
                     </div>     
                </div>
           </div>
      </div>
  //   })
  // }
  
  
} 

export default StudentAndAppplication