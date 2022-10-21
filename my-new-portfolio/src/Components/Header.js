import '../Stylesheets/Header.css'
import '../Stylesheets/NavBar.css'
import React from "react";
import {Link} from 'react-scroll';
import me from '../assets/images/me.png'


function Header() {
    return (
    
          <section id="Home">
            <nav className="navbar-container">
            <img src={me} alt="me" className="me" height="150px" width="150px"/>
           
                <ul className="nav-menu">
                    <li className="home-link">
                        <Link to="Home">HOME</Link>
                    </li>
                    <li className="resume-link">
                        <Link to="Resume">RESUME</Link>
                    </li>
                    <li className="projects-link">
                        <Link to="Projects">PROJECTS</Link>
                    </li>
                    <li className="contact-link">
                        <Link to="Contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
            </section>
      
    )
  }
 
  export default Header
