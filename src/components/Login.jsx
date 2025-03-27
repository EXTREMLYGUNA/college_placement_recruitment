/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import api from '../service/apiService'
import ApiRoutes from '../utils/apiRoutes';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SideBar from './SideBar';

function Login() {
    let navigate = useNavigate()
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleLogin = async (e)=>{
        e.preventDefault();
        try {
            setIsSubmitting(true)
            const formData = new FormData(e.currentTarget)
            const data = {}
            for(let [key,value] of formData.entries()){
            data[key] = value
            }
            
            let response = await api.post(ApiRoutes.LOGIN.path,data,{
                autheticate:ApiRoutes.LOGIN.authenticate
            })
            toast.success(response.message)
            sessionStorage.setItem("token",response.token)
            sessionStorage.setItem("role",response.role)
            navigate('/')
        } catch (error) {
            console.error(error.response.data.message)
        }
    }

    useEffect(()=>{
      sessionStorage.clear()
    },[])



  return (<>
  
    <div className='login-wrapper'>
        <h3 className='wrapper' >Welcome to Student application portal</h3>
        <p>Don't have an account ? Register <Link to='/signup' style={{textDecoration:"none"}} >now</Link></p>
      <Form onSubmit={handleLogin} >
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' />
        <Form.Text className="text-muted">
          <p>Don't share your password !</p>
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" disabled={isSubmitting} >
      {isSubmitting ? 'Loading...' : 'Login'}
      </Button>
    </Form>
    </div>
    <div className='note' >
      <p><h5 style={{color:"red"}}>Note : </h5> 
      Here, <b>role</b> is desided for access in sidebar catagories </p>
      <ul>
        <p><b>Role : Student</b></p>
        <li>Dashboard</li>
        <li>Student And Appplication Management</li>
        <li>Interview Scheduling</li>
        <li>Recruitment Status Tracking</li>
        <li>User Interface <b>View and Edit</b>
        </li>
      </ul>
      <ul>
        <p><b>Role : Admin</b></p>
        <li>All catagories will access</li>
      </ul>
    </div>
  </>)
}

export default Login
