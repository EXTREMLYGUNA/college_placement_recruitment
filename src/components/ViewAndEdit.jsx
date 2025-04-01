//* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import TopBar from './TopBar'
import Form from 'react-bootstrap/Form'
import { useNavigate,useParams} from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import SideBar from './SideBar.jsx';
import { api1 } from '../service/apiService.jsx';
import ApiRoutes from '../utils/apiRoutes.jsx';
import toast from 'react-hot-toast';

function ViewAndEdit() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [formData,setFormData] = useState({
    name: '',
    email: '',
    birth: '',
    mobile: '',
    age: '',
    address: '',
    resume: null,
    gender: '',
    status: 'In-Active',
    userId: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api1.get(`${ApiRoutes.GET_USERS.path}/${id}`, {
          authenticate: ApiRoutes.COLLECT_ALL_USERS.authenticate
        });
        setFormData(response.data); // Assuming the API returns the user data
        console.log(response.data)
      } catch (error) {
        let errorMessage = 'Failed to fetch user data';
        if (error.response) {
          // Handle HTTP errors (4xx, 5xx)
          if (error.response.status === 404) {
            errorMessage = 'User not found';
          } else if (error.response.status === 401) {
            errorMessage = 'Unauthorized access';
          } else if (error.response.data?.message) {
            errorMessage = error.response.data.message;
          }
        } else if (error.request) {
          // The request was made but no response received
          errorMessage = 'Network error - no response from server';
        }
        toast.error(errorMessage);
        console.error('Error details:', error);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      const response = await api1.put(`${ApiRoutes.EDIT_USER.path}/${id}`, formDataToSend, {
        authenticate: ApiRoutes.EDIT_USER.authenticate,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      
      toast.success(response.message);
      navigate('/database/userData');
    } catch (error) {
      let errorMessage = 'Failed to update user';
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = 'Validation error: ' + 
            (error.response.data?.errors?.join(', ') || 'Invalid data');
        } else if (error.response.data?.message) {
          errorMessage = error.response.data.message;
        }
      }
      toast.error(errorMessage);
      console.error('Error details:', error);
      
      // Additional debug for FormData issues
      if (error.message.includes('FormData')) {
        console.log('FormData contents:', Array.from(error.formDataToSend.entries()));
      }
    }
  };

  return (<><SideBar/>
    <div className="find" style={{marginLeft:"50px"}}>
      <TopBar/>
      <Button variant='primary' onClick={()=>navigate('/database/userData')} >Back</Button>
      <h1>User Interface</h1>
      
      <div id="content-wrapper" className="d-flex flex-column" style={{display:'flex',width:'1000px'}}>
      
          <div id="content">
            
              <div className="container-fluid">
                
                   <div className="row">
                   <div className='card'>
      <div className='details'><Link to='/application/editUser/:id'       className='all'> VIEW & EDIT </Link>
      <div><Link to='/shortlist'  className='all'>SHORT LIST</Link></div>
      <div><Link to='/reject'   className='all'>REJECT LIST          </Link></div>
                       <div className="col-lg-7">
                           <div className="p-5"></div>
                               <Form onSubmit={handleSubmit} style={{marginLeft:'-350px',width:'600px'}} >
                               <Form.Group className="mb-3">
                                 <Form.Label>Name</Form.Label>
                                 <Form.Control type="text" placeholder="Enter your name" name='name' value={formData.name} onChange={handleChange} required />
                               </Form.Group>
                         
                               <Form.Group className="mb-3">
                                 <Form.Label>Email address</Form.Label>
                                 <Form.Control type="email" placeholder="Enter your email" name='email' value={formData.email} onChange={handleChange} required/>
                               </Form.Group>
                         
                               <Form.Group className="mb-3">
                                 <Form.Label>Birth</Form.Label>
                                 <Form.Control type="date" name='birth' value={formData.birth} onChange={handleChange} required/>
                               </Form.Group>
                         
                               <Form.Group className="mb-3">
                                 <Form.Label>Mobile</Form.Label>
                                 <Form.Control type="number" placeholder="Enter your mobile number" name='mobile' value={formData.mobile} onChange={handleChange} required />
                                 <Form.Text className="text-muted">
                                  Mobile number should be 10 characters.
                                 </Form.Text>
                               </Form.Group>
                         
                               <Form.Group className="mb-3">
                                 <Form.Label>Age</Form.Label>
                                 <Form.Control type="number" placeholder="Enter your age" name='age' value={formData.age} onChange={handleChange} required/>
                               </Form.Group>
                         
                               <Form.Group className="mb-3">
                                 <Form.Label>Address</Form.Label>
                                 <Form.Control type="text" placeholder="Enter your address" name='address' value={formData.address} onChange={handleChange} required/>
                               </Form.Group>
                         
                               {/* <Form.Group className="mb-3" >
                                 <Form.Label>Upload resume</Form.Label>
                                 <Form.Control type="file" id='resume' name='resume' value={formData.resume} onChange={handleChange} />
                                 {formData.resume && typeof formData.resume === 'string' && (
                                   <div>Current file: {formData.resume}</div>
                                 )}
                               </Form.Group> */}
                         
                               <Form.Group className="mb-3">
                                 <Form.Label>Gender</Form.Label>
                                 <Form.Select defaultValue={'Select'} name='gender' value={formData.gender} onChange={handleChange} required>
                                   <option value={'null'}   >Select Gender</option>
                                   <option value={'male'}   >male</option>
                                   <option value={'female'} >female</option>
                                   <option value={'others'} >others</option>
                                 </Form.Select>
                               </Form.Group>
                         
                               <Form.Group className="mb-3">
                                 <Form.Label>Status</Form.Label>
                                 <Form.Select defaultValue={'In-Active'} name='status' value={formData.status} onChange={handleChange} required>
                                   <option defaultValue={'In-Active'} >Select</option>
                                   <option value={'Active'} >Active</option>
                                   <option value={'In-Active'} >In-Active</option>
                                 </Form.Select>
                               </Form.Group>
                         
                               <Form.Group className="mb-3">
                                 <Form.Label>UserId</Form.Label>
                                 <Form.Control type="text" placeholder="Enter your id from Login credentials" name='userId' value={formData.userId} onChange={handleChange} required />
                                 <Form.Text className="text-muted">
                                  <b>id</b> should be <b>copy</b> to Login credentials data at related your <b>email</b> <Link to='/database/loginData'><Button variant='info' >Go</Button></Link>
                                 </Form.Text>
                               </Form.Group>
                         
                               <Button variant="primary" type="submit" disabled={isSubmitting} >
                               {isSubmitting ? 'Updating...' : 'Update'}
                               </Button>
                           </Form>
    
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div>
    </div>
    </div>
    </div>
    
    </> )
}

export default ViewAndEdit

