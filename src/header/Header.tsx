import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './layout.css'

const Header = () => {
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
        </div>
      </div>
  )
}

export default Header