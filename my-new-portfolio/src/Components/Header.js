import '../Stylesheets/Header.css'
import '../Stylesheets/NavBar.css'
import React from "react";
import {Link} from 'react-scroll'


function Header() {
    return (
    
          <section id="Home">
            <nav className="navbar-container">
            {/* <img src={} alt="" className=""/> */}
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
