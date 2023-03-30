
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaTimes, FaBars } from "react-icons/fa";
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';


function App() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <div className="App">


      <Router>



        <nav className="navbar">

          <div className='image'>
          <NavLink exact
                  to="/">  {<img src={require("./image/truckrr.png")} alt="logo" />}</NavLink>
          </div>

          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">

              <i className="fas fa-code"></i>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
               <li className="nav-item">
                <div className="dropdown">
                  <button class="dropbtn">Products</button>
                  <div class="dropdown-content">


                    <a href="a">SAAS</a>
                    <a href="#">Solution</a>
                    <a href="#">CRM</a>
                    <a href="#">Tracking</a>
                    <a href="#">Drivers</a>
                    <a href="#">Marketing place</a>



                  </div>
                </div>
              </li> 
              <li className="nav-item">
                <NavLink
                  exact
                  to="/about"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/blog"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Blog
                </NavLink>
              </li>
              <div className="nav-icon1" onClick={handleClick}>
              <i className={click ? "fas Fa-times" : "fas Fa-bars"}><FaTimes /></i>
            </div>



            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas Fa-times" : "fas Fa-bars"}><FaBars /></i>
            </div>
          </div>
        </nav>


        {/* 
      
          <header>

            <div className='image'>
              {<img src={require("./image/truckrr.png")} alt="logo" />}
            </div>



            <nav ref={navRef} >

              <ul className='display'>
                <li>
                  <button className='home'><Link to="/" className='home'>Home</Link></button>
                </li>


                <div className="dropdown">
                  <button class="dropbtn">products</button>
                  <div class="dropdown-content">


                    <a href="a">SAAS</a>
                    <a href="#">Solution</a>
                    <a href="#">CRM</a>
                    <a href="#">Tracking</a>
                    <a href="#">Drivers</a>
                    <a href="#">Marketing place</a>



                  </div>
                </div>
                <li>
                  <button className='home'> <Link to="/about" className='home'>about</Link></button>
                </li>
                <li>
                  <button className='home'> <Link to="/blog" className='home1'>  blog</Link></button>

                </li>


                <button className="nav-colse-btn" onClick={shownavbar}> <FaTimes /> </button>
              </ul>

            </nav>
            <button className="nav-btn" onClick={shownavbar}> <FaBars /> </button>

          </header> */}








        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />

        </Routes>
      </Router>


    </div>






  );

}

export default App;
