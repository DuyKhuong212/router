import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";

const Home = () => {
  return <h1>Trang chủ</h1>;
};

const About = () => {
  return <h1>Giới thiệu</h1>;
};

const App = () => {
  return (
    <HashRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/about">Giới thiệu</Link>
            </li>
          </ul>
        </nav>

        <Route  path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </div>
    </HashRouter>
  );
};

export default App;




