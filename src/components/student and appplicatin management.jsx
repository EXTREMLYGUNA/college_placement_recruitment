/* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react'
// import TopBar from './TopBar'
// import Feed from './Feed.jsx';
// import SideBar from './SideBar.jsx';
// import { api1 } from '../service/apiService.jsx';
// import ApiRoutes from '../utils/apiRoutes.jsx';
// import toast from 'react-hot-toast';
// import { useNavigate } from 'react-router-dom';

// function StudentAndAppplication() {
// let [data,setData] = useState()
//     const loadData = async()=>{
//         try {
//               const {path,authenticate} = ApiRoutes.GET_ALL_USERS
//               let response =await api1.post(path,{authenticate})
//               console.log(response)
//               setData(response.data)
//             } catch (error) {
//               if(error.response.status===401)
//                 toast.error(error.response.message)
//             }
//     }

//     useEffect(()=>{
//         loadData()
//       })
      
// let navigate = useNavigate()

//   const handleSubmit = async (e)=>{
//     e.preventDefault();
    
//       const formData = new FormData(e.currentTarget)
//       const data = {}
//       for(let [key,value] of formData.entries())
//         data[key] = value;
//       console.log(data)
    
//     let response = await api1.post(ApiRoutes.GET_ALL_USERS.path,data,{
//       authenticate:ApiRoutes.GET_ALL_USERS.authenticate
      
//     })
//     console.log(response)
//     toast.success(response.message)
//     navigate('/status')
//   }


//       return <><SideBar/>
//       <div>
//           <TopBar/>
//            <h1>Student And Appplication Management</h1>
//            {
//             data?.map((e)=>{
//                   return <Feed data={e} key={e.id} />
//             })
//            }
          
//       </div>
//       </>
  
// } 

// export default StudentAndAppplication
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import {api1} from '../service/apiService';
import ApiRoutes from '../utils/apiRoutes';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar'
import TopBar from './TopBar';

function StudentAndAppplication() {
  let navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e)=>{
    e.preventDefault();
      setIsSubmitting(true)
      const formData = new FormData(e.currentTarget)
      const data = {}
      for(let [key,value] of formData.entries())
        data[key] = value;
      console.log(data)
    
    let response = await api1.post(ApiRoutes.GET_ALL_USERS.path,data,{
      authenticate:ApiRoutes.GET_ALL_USERS.authenticate
      
    })
    console.log(response)
    toast.success(response.message)
    navigate('/database/userData')
  }

  return (<><SideBar/>
  <div className='login-wrapper ' >
      <TopBar/>
      <h3>Fill the all options without Fail</h3>
      <Form onSubmit = { handleSubmit } >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name='name' required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name='email' required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Birth</Form.Label>
        <Form.Control type="date" name='birth' required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter your mobile number" name='mobile' required />
        <Form.Text className="text-muted">
         Mobile number should be 10 characters.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter your age" name='age' required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" name='address' required/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Upload resume</Form.Label>
        <Form.Control type="file" id='resume' name='resume' required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select defaultValue={'Select'} name='gender' required>
          <option value={'null'}   >Select Gender</option>
          <option value={'male'}   >male</option>
          <option value={'female'} >female</option>
          <option value={'others'} >others</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select defaultValue={'In-Active'} name='status' required>
          <option defaultValue={'In-Active'} >Select</option>
          <option value={'Active'} >Active</option>
          <option value={'In-Active'} >In-Active</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>UserId</Form.Label>
        <Form.Control type="text" placeholder="Enter your id from Login credentials" name='userId' required />
        <Form.Text className="text-muted">
         <b>"id"</b> should be <b>copy</b> to Login credentials data at related your <b>email</b> <Link to='/database/loginData'><Button variant='info' >Go</Button></Link>
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isSubmitting}>
      {isSubmitting ? 'Submitting...' : 'Apply'}
      </Button>
    </Form>
    </div>
    </>)
}

export default StudentAndAppplication
