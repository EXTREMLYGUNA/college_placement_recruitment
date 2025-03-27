/* eslint-disable no-unused-vars */
import React from 'react'
import TopBar from './TopBar'
import Feed from './Feed.jsx';

function StudentAndAppplication() {
// let [data,setData] = useState()
//     const loadData = async()=>{
//         try {
//               const {path,authenticate} = ApiRoutes.GET_ALL_USERS
//               let response =await api.post(path,{authenticate})
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
    
//     let response = await api.post(ApiRoutes.GET_ALL_USERS.path,data,{
//       authenticate:ApiRoutes.GET_ALL_USERS.authenticate
      
//     })
//     console.log(response)
//     toast.success(response.message)
//     navigate('/status')
//   }

// const navigate = useNavigate(); // Added missing hook
// const [isSubmitting, setIsSubmitting] = useState(false);


// const handleSubmit = async (e) => {
//   e.preventDefault();
  
//   try {
//     const formData = new FormData(e.currentTarget);
//     setIsSubmitting(true);
//     // If your API expects FormData (especially for file upload), send formData directly
//     const response = await api.post(
//       ApiRoutes.GET_ALL_USERS.path, 
//       formData, // Send FormData directly if API accepts it
//       {
//         authenticate: ApiRoutes.GET_ALL_USERS.authenticate,
//         headers: {
//           'Content-Type': 'multipart/form-data' // Important for file upload
//         }
//       }
//     );
    
//     console.log(response);
//     toast.success(response.message);
//     navigate('/status');
//   } catch (error) {
//     console.error('Submission failed:', error);
//     toast.error(error.response?.data?.message || 'Application failed');
//   }
// }


      return <div>
          <TopBar/>
           <h1>Student And Appplication Management</h1>
           <Feed/>
          
      </div>
  
  
} 

export default StudentAndAppplication