import '../Stylesheets/Header.css'
import '../Stylesheets/NavBar.css'
import React from "react";
import {Link} from 'react-scroll';
import me from '../assets/images/me.png';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function Header() {
    return (
    
          <section id="Home">
            <nav className="navbar-container">
            <img src={me} alt="me" className="me" height="150px" width="150px"/>
           
                <ul className="nav-menu">
                    <li className="home-link">
                        <a href="/">HOME</a>
                    </li>
                    <li className="resume-link">
                        <a href="/resume">RESUME</a>
                    </li>
                    <li className="projects-link">
                        <a href="/projects">PROJECTS</a>
                    </li>
                    <li className="contact-link">
                        <a href="/contact">CONTACT</a>
                    </li>
                </ul>
            </nav>
            </section>
      
    )
  }
 
  export default Header
