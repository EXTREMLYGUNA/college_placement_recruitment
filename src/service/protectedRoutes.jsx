/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtectedRoutes({children}) {
    let token = sessionStorage.getItem("token")
  return token ? children : <Navigate to='login' />
}

export default ProtectedRoutes
