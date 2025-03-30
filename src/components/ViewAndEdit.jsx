//* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import TopBar from './TopBar'
import Form from 'react-bootstrap/Form'
import { useNavigate} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import SideBar from './SideBar.jsx';
import { api1 } from '../service/apiService.jsx';
import ApiRoutes from '../utils/apiRoutes.jsx';
import toast from 'react-hot-toast';

function ViewAndEdit() {

    const navigate = useNavigate()
        const [name,setName] = useState('')
        const [email,setEmail] = useState('')
        const [birth,setBirth] = useState('')
        const [mobile,setMobile] = useState()
        const [age,setAge] = useState('')
        const [address,setAddress] = useState('')
        const [resume,setResume] = useState('')
        const [gender,setGender] = useState('')
        const [status,setStatus] = useState()
        const [userId,setUserId] = useState('')
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e)=>{
      e.preventDefault();
      setIsSubmitting(true)
      const formData = new FormData(e.currentTarget)
      const data = {}
      for(let [key,value] of formData.entries())
        data[key] = value;
      console.log(data)
    
    let response = await api1.post(ApiRoutes.EDIT_USER.path,data,{
      authenticate:ApiRoutes.EDIT_USER.authenticate
      
    })
    console.log(response)
    toast.success(response.message)
    navigate('/database/userData')
  }
  return (<><SideBar/>
    <div className="find" style={{marginLeft:"50px"}}>
      <TopBar/>
      <Button variant='primary' onClick={()=>navigate('/dashboard')} >Back</Button>
      <h1>User Interface</h1>
      <Link to='/viewEdit/:id'       className='all'>  
      <Form onSubmit={handleSubmit} >
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" name='name' value={name} onChange={(e)=>setName(e.target.value)} required />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Birth</Form.Label>
        <Form.Control type="date" name='birth' value={birth} onChange={(e)=>setBirth(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="number" placeholder="Enter your mobile number" name='mobile' value={mobile} onChange={(e)=>setMobile(e.target.value)} required />
        <Form.Text className="text-muted">
         Mobile number should be 10 characters.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter your age" name='age' value={age} onChange={(e)=>setAge(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control type="text" placeholder="Enter your address" name='address' value={address} onChange={(e)=>setAddress(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Upload resume</Form.Label>
        <Form.Control type="file" id='resume' name='resume' value={resume} onChange={(e)=>setResume(e.target.value)} required/>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Gender</Form.Label>
        <Form.Select defaultValue={'Select'} name='gender' value={gender} onChange={(e)=>setGender(e.target.value)} required>
          <option value={'null'}   >Select Gender</option>
          <option value={'male'}   >male</option>
          <option value={'female'} >female</option>
          <option value={'others'} >others</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Status</Form.Label>
        <Form.Select defaultValue={'In-Active'} name='status' value={status} onChange={(e)=>setStatus(e.target.value)} required>
          <option defaultValue={'In-Active'} >Select</option>
          <option value={'Active'} >Active</option>
          <option value={'In-Active'} >In-Active</option>
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>UserId</Form.Label>
        <Form.Control type="text" placeholder="Enter your id from Login credentials" name='userId' value={userId} onChange={(e)=>setUserId(e.target.value)} required />
        <Form.Text className="text-muted">
         <b>id</b> should be <b>copy</b> to Login credentials data at related your <b>email</b> <Link to='/database/loginData'><Button variant='info' >Go</Button></Link>
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={isSubmitting} >
      {isSubmitting ? 'Updating...' : 'Update'}
      </Button>
    </Form></Link>
    </div>
    </> )
}

export default ViewAndEdit

