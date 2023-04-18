import { Link, Outlet } from "react-router-dom"
import './home.css'

const Home = () => {
  return (
    <div className="nav2">
      <ul>
        <li>
          {/* <Link to = "" >Home</Link> */}
          <h1 className='textCenter'>This is page Home</h1>
        </li>
      </ul>
        {/* <Outlet/> */}
      </div>
  )
}

export default Home