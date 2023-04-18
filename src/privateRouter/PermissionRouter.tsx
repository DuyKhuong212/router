import React from 'react'
import { Navigate } from 'react-router-dom'

const PermissionRouter = ({children}:any) => {
const acessToken = localStorage.getItem("isAdmin")
  return (acessToken === 'admin' ? children : <Navigate to = "/errorPage"/> 
  )
}

export default PermissionRouter