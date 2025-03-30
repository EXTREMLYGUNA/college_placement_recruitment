import axios from 'axios'
import config from '../utils/config'
import toast from 'react-hot-toast'

//This is Login sector
const api = axios.create({
    baseURL:config.BASE_URL,
    headers:{
        "Content-Type":"application/json"
    },
})

api.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem('token')
    if(config.authenticate===true && token)
        config.headers.Authorization = `Bearer ${token}`

    return config
},((error)=>Promise.reject(error)))

api.interceptors.response.use((response)=>{
    return response.data
},((error)=>{
        toast.error(error.response.data.message)
        return Promise.reject(error)
}))


//This is Application sector
const api1 = axios.create({
    baseURL:config.BASE_URL,
    headers:{
        "Content-Type":"application/json"
    },
})

api1.interceptors.request.use((config)=>{
    const token = sessionStorage.getItem('token')
    if(config.authenticate===true && token)
        config.headers.Authorization = `Bearer ${token}`

    return config
},((error)=>Promise.reject(error)))

api1.interceptors.response.use((response)=>{
    return response.data
},((error)=>{
        toast.error(error.response.data.message)
        return Promise.reject(error)
}))

export  {api,api1}