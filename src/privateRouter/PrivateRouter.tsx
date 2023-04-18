import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({children}:any) => {
const acessToken = localStorage.getItem("isAuthenticated")
  return (acessToken === 'true' ? children : <Navigate to = "/"/> 
  )
}

export default PrivateRouter