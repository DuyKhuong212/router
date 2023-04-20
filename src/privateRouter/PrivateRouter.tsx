import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import AuthContext from '../store/auth-context';
import CryptoJS from "crypto-js"


const PrivateRouter = ({children}:any) => {
  const ctx = useContext(AuthContext);
  const encryptedDataFromStorage = localStorage.getItem('isAuthenticated') as string;

  if (encryptedDataFromStorage != null){
    const bytes = CryptoJS.AES.decrypt(encryptedDataFromStorage, 'isAuthenticated');
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
    return (decryptedData === 'true' ? children : <Navigate to = "/"/> 
    )
  }

  return  ( ctx.isLoggedIn == true ? children : <Navigate to = "/"/> )

  
}

export default PrivateRouter