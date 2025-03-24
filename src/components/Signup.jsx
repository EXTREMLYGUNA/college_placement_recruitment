/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import api from '../service/apiService';
import ApiRoutes from '../utils/apiRoutes';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Signup() {
  let navigate = useNavigate()

  const handleSignup = async (e)=>{
    e.preventDefault();
    
      const formData = new FormData(e.currentTarget)
      const data = {}
      for(let [key,value] of formData.entries())
        data[key] = value;
      console.log(data)
    
    let response = await api.post(ApiRoutes.SIGNUP.path,data,{
      autheticate:ApiRoutes.SIGNUP.authenticate
      
    })
    console.log(response)
    toast.success(response.message)
    navigate('/login')
  }

  return (<>
  <div className='login-wrapper ' >
        <h3 className='wrapper' >Welcome to Student application portal</h3>
        <p>Already an account ? Login <Link to='/login' style={{textDecoration:"none"}}>Here</Link></p>
      <Form onSubmit = { handleSignup } >
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
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter your age" name='age' required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" name='address' required/>
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
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter your mobile number" name='mobile' required />
        <Form.Text className="text-muted">
         Mobile number should be 10 characters.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select defaultValue={'Student'} name='status' required>
          <option value={'Active'} >Active</option>
          <option value={'In-Active'} >In-Active</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Role</Form.Label>
        <Form.Select defaultValue={'Student'} name='role' required>
          <option value={'Student'} >Student</option>
          <option value={'Admin'} >Admin</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' required/>
        <Form.Text className="text-muted">
          <p>Don't share your password !</p>
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Signup
      </Button>
    </Form>
    </div>
    </>)
}

export default Signup
