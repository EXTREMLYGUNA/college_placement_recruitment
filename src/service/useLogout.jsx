/* eslint-disable no-unused-vars */
import React from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function useLogout() {
    let navigate = useNavigate
  return ()=>{
    sessionStorage.clear()
    toast.success("Logout successfull")
    navigate('/login')
  }
}
export default useLogout
