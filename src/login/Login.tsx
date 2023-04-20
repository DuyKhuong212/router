import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Authen, chillUserProp } from './User';
import './style.css'
import AuthContext from '../store/auth-context';

const Login = ({userProp}:chillUserProp) => {
const [textEmail, setTextEmail] = useState("");
    const [textPass, setTextPass] = useState("");
    const authCtx = useContext(AuthContext);

    const navigate = useNavigate();

    const email = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextEmail(event.target.value);
    };
  
    const passWord = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextPass(event.target.value);
    };

    useEffect(() => {
      if (authCtx.isLoggedIn === true) {
        navigate("/home");
      }
    })
  
    const handleSubmit = () => {
        const u = userProp.find(
            (user) =>
              user.name === textEmail && user.pass === textPass)
      if (u) {
        authCtx.onLogin();
        navigate("/home");
      } else {
        console.log("vui long nhap lai");
      }
    }

  return (
    
    <div className='login-container'> 
    
    <form>
    <div className="form-control">
    <label htmlFor="email">Email:</label>
    <input id="email" type="text" onChange={email} />
    </div>
 
    <div className="form-control">
    <label htmlFor="passWord">Password:</label>
    <input id="passWord" type="password" onChange={passWord} />
    </div>
 
    <button className="btn" children="SubMit" onClick={handleSubmit} />
    </form>
  </div>
    
  )
}

export default Login