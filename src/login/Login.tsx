import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Authen, chillUserProp } from './User';
import './style.css'

const Login = ({userProp}:chillUserProp) => {
const [textEmail, setTextEmail] = useState("");
    const [textPass, setTextPass] = useState("");
    // const [checkLogin, setCheckLogin] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useContext(Authen);
    
    const navigate = useNavigate();

    const email = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextEmail(event.target.value);
    };
  
    const passWord = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTextPass(event.target.value);
    };
  
    const handleSubmit = () => {
        const u = userProp.find(
            (user) =>
              user.name === textEmail && user.pass === textPass && isAuthenticated === false
              // && checkLogin === false
          )
      if (u) {
        // console.log("thanh cong");
        // setCheckLogin(true);
        // localStorage.setItem('isAdmin', u.isAdmin)
        // localStorage.setItem('state', 'isLogin')

        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
        navigate("/home");
      } else {
        console.log("vui long nhap lai");
        // setCheckLogin(false);
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