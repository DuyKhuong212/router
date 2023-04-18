import React from 'react'
import { BrowserRouter, HashRouter, Link, MemoryRouter, Outlet, Route, Routes } from 'react-router-dom'
import Blogs from '../blogs/Blogs'
import Contact from '../contact/Contact'
import Home from '../home/Home'
import Header from '../header/Header'
import { Topic2 } from '../Topic2'
import PostList from '../post/PostList'
import PostDetails from '../post/PostDetails'
import Other from '../post/Other'
import User from '../login/User'
import PermissionRouter from '../privateRouter/PermissionRouter'
import PrivateRouter from '../privateRouter/PrivateRouter'
import PageLocation from '../post/PageLocation'
import NotFound from '../404notfound/NotFound'

const Router = () => {
  return (
    <BrowserRouter>
    <div>
      <Header/>
    </div>
    <Routes>
    <Route path="/" element={<User />} ></Route>
    <Route path="/form" element={<PageLocation />} ></Route>
    <Route path="/errorPage" element={<NotFound />} ></Route>
      <Route path="/home" element={<PrivateRouter><Home /></PrivateRouter>} ></Route>
      <Route path="/blogs" element={<PrivateRouter><Blogs /></PrivateRouter>} >
        <Route path='topic-1' element = {<PostList/>}/>
        <Route path='/blogs/topic-1/:id' element = {<PostDetails/>}/>
        <Route path='topic-2' element = {<Topic2/>}/>
      </Route>
      <Route path='/other' element = {<Other/>} />
      <Route path="contact" element={<PrivateRouter><PermissionRouter><Contact /></PermissionRouter></PrivateRouter>} />
    </Routes>
  </BrowserRouter>
  )
}

export default Router
