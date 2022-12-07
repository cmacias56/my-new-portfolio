import '../Stylesheets/Header.css'
import '../Stylesheets/NavBar.css'
import React from "react";
import me from '../assets/images/me.png';
import { Link, useMatch, useResolvedPath} from 'react-router-dom';


function Header() {
    return (
    
          <section className="header-container">
            {/* <nav className="navbar-container"> */}
            <img src={me} alt="me" className="me" height="150px" width="150px"/>
           
                <div className="nav-menu">
                    <Link to="/"/>
                        <CustomLink className="home-link" to="/">HOME</CustomLink>
                        <CustomLink className="resume-link" to="/resume">RESUME</CustomLink>
                        <CustomLink className="projects-link" to="/projects">PROJECTS</CustomLink>
                        {/* <CustomLink className="aboutme-link" to="/aboutme">ABOUT ME</CustomLink> */}
                        <CustomLink className="contact-link" to="/contact">CONTACT</CustomLink>
                </div>
            {/* </nav> */}
            </section>
      
    )
  }

  function CustomLink({ to, children, ...props }) {
   const resolvedPath = useResolvedPath(to)
   const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    
    return (
        <li className={isActive ? "active": ""}>
            <Link to={to} {...props}>
                {children}
        </Link>
        </li>
    )
  }
 
  export default Header
