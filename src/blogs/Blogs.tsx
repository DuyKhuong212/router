
import { Link, NavLink, Outlet } from 'react-router-dom'
import './blog.css'
const Blogs = () => {
  return (
    <div className='nav2'>
    <ul className='flex2'>
    <div>
    <Link className='link' to = "/blogs/topic-1" >Bài Viết</Link>
    </div>
    <div>
    <NavLink className={'link'} to = "/blogs/topic-2" >Topic-2</NavLink>
    </div>
  </ul>
  <Outlet/>
  </div>
  )
}

export default Blogs