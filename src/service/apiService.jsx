import axios from 'axios'
import config from '../utils/config'
import toast from 'react-hot-toast'

const api = axios.create({
    baseURL:config.BASE_URL,
    headers:{
        "Content-Type":"application/json"
    }
})

api.interceptors.request.use((config)=>{

    return config
},((error)=>Promise.reject(error)))

api.interceptors.response.use((response)=>{

    if([200,201].includes(response.status))
        toast.success(response.data.message)
    return response.data
},((error)=>Promise.reject(error)))

export default api