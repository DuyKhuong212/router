import React, { useContext } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './layout.css'
import AuthContext from '../store/auth-context';

const Header = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className='nav'>
        <div className='flex'>
          <div>
            <Link className='link' to='/home'>Home</Link>
          </div>
          <div>
            <Link  className='link' to='blogs'>Blogs</Link>
          </div>
          <div>
            <Link  className='link' to='contact'>Contact</Link>
          </div>
          {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
         <div>
            <Link  className='link' to='/'>login</Link>
          </div>
        </div>
      </div>
  )
}

export default Header