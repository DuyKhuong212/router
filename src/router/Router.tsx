import React from 'react'
import { BrowserRouter, HashRouter, Link, MemoryRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
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

export  function Root() {
  return (
    <>
      <div>
        <Header/>
        <Outlet />
      </div>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <User />
  </>,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/form",
        element: <PageLocation />,
      },
      {
        path: "/errorPage",
        element: <NotFound />,
      },
      {
        path: "/home",
        element: <PrivateRouter><><Home /></></PrivateRouter>,
      },
      {
        path: "/blogs",
        element: <PrivateRouter><Blogs /></PrivateRouter>,
        children: [
          {
            path: "topic-1",
            element: <PostList />,
          },
          {
            path: "/blogs/topic-1/:id",
            element: <PostDetails />,
          },
          {
            path: "topic-2",
            element: <Topic2 />,
          },
        ],
      },
      {
        path: "/other",
        element: <Other/>,
      },
      {
        path: "/contact",
        element: <PrivateRouter><PermissionRouter><Contact /></PermissionRouter></PrivateRouter>,
      },
    ],
  }
]);

const Router = () => {
  return (
    <RouterProvider router={router}/>
  //   <BrowserRouter>
  //   <div>
  //     <Header/>
  //   </div>
  //   <Routes>
  //   <Route path="/" element={<User />} ></Route>
  //   <Route path="/form" element={<PageLocation />} ></Route>
  //   <Route path="/errorPage" element={<NotFound />} ></Route>
  //     <Route path="/home" element={<PrivateRouter><Home /></PrivateRouter>} ></Route>
  //     <Route path="/blogs" element={<PrivateRouter><Blogs /></PrivateRouter>} >
  //       <Route path='topic-1' element = {<PostList/>}/>
  //       <Route path='/blogs/topic-1/:id' element = {<PostDetails/>}/>
  //       <Route path='topic-2' element = {<Topic2/>}/>
  //     </Route>
  //     <Route path='/other' element = {<Other/>} />
  //     <Route path="contact" element={<PrivateRouter><PermissionRouter><Contact /></PermissionRouter></PrivateRouter>} />
  //   </Routes>
  // </BrowserRouter>
  )
}

export default Router
