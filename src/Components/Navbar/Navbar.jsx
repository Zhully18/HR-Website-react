import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="nav-logo">
                <h2>Seamfull HR</h2>
            </div>
            <div className="links">
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#about"><li>About</li></a>
                    <a href="#services"><li>Services</li></a>
                    <a href="#projects"><li>Projects</li></a>
                </ul>
            </div>
            <div className="nav_btn">
                <a href="#contact"><button>Hire Me</button></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar