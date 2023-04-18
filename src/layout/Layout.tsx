import { Outlet, Link, BrowserRouter, Routes, Route } from 'react-router-dom'
import './layout.css'
import Header from '../header/Header';
import Blogs from '../blogs/Blogs';
import Contact from '../contact/Contact';
import Home from '../home/Home';
import Router from '../router/Router';
const Layout = () => {
    return (
<div>
  <div>
  <Header/>
  </div>
     
       <main>
       <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
       </main>
       
</div>


    
    );
  };
export default Layout