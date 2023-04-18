import React, { createContext, useEffect, useState } from 'react'
import Login from './Login'
import { DataUser } from './DataUser'
import { useNavigate } from 'react-router-dom'
export interface UserProp {
    name: string,
    pass: string,
    isAdmin: string
}

export interface chillUserProp {
    userProp : UserProp[]
}

export interface UcontextType {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Authen = createContext<UcontextType> ({
  isAuthenticated : false,
  setIsAuthenticated : () => {}
})

const User = () => {
  // const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [user, setUser] = useState<UserProp[]>([{'name': '', 'pass' : '', 'isAdmin' : ''}])
    useEffect(() => {
      setUser(DataUser)
      },[])
       
    const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
    // console.log(storedIsAuthenticated)
    // if (storedIsAuthenticated) {
    //    setIsAuthenticated(true);
    //   navigate('/home')
    // }

  return (
    <Authen.Provider value={{ isAuthenticated, setIsAuthenticated }}>
    <Login userProp = {user}/>
  </Authen.Provider>
  )
}

export default User