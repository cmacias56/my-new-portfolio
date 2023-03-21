import React from "react";
import '../Stylesheets/Resume.css'
import HTML from "../assets/images/html-icon.png";
import CSS from "../assets/images/css-icon.png";
import postman from "../assets/images/postman.png"
import Javascript from "../assets/images/js-icon.png";
import reactIcon from "../assets/images/react-icon.png";
import vscode from "../assets/images/vscode-icon.png";
import git from "../assets/images/git-icon.png";
import postgresql from "../assets/images/postgresql.png";
import ruby from "../assets/images/ruby.png";
import TW from "../assets/images/tailwind.png";
import rails from "../assets/images/rails.png";
import rspec from "../assets/images/rspec.png"

function Resume () {
    return (
        
        <section className="resume-section" id="Resume">
        <div className="skills-container">
    <div className="button-container">
      <a href="https://docs.google.com/document/d/1bkdeJlu-YxgjnVlXbAw0RcojK8PxJw-OD6M7QBiMosc/edit"target="_blank" rel="noreferrer" alt="Resume link"><button className="button">View Resumé</button></a>
      </div>
        <h1 className="skills-heading">Coding Languages</h1>
        <h4 className="skills-subheading">What I know So far</h4>
        <div className="icons">
        <ul className="skills-grid">
          <li>
            <div><img src={HTML} alt="html-icon" className="html-icon"/>
            <p>HTML</p>
            </div>
          </li>
          <li>
            <div><img src={CSS} alt="css-icon" className="css-icon"/>
            <p>CSS</p>
            </div>
          </li>
           <li> 
             <div><img src={postman} alt="postman-icon" className="rb-icon" height="50px"/>
            <p>Postman</p>
            </div> 
          </li>
          <li>
            <div><img src={Javascript} alt="js-icon" className="js-icon"/>
            <p>Javascript</p>
            </div>
          </li>
          <li>
            <div><img src={ruby} alt="rb-icon" className="rb-icon"/>
            <p>Ruby</p>
            </div>
          </li>
          <li>
            <div><img src={rails} alt="rails-icon" className="rb-icon"/>
            <p>Rails</p>
            </div>
          </li>
          <li>
            <div><img src={rspec} alt="rspec-icon" className="rb-icon"/>
            <p>Rspec</p>
            </div>
          </li>
          <li>
            <div><img src={reactIcon} alt="react-icon" className="react-icon"/>
            <p>React.js</p>
            </div>
          </li>
          <li>
            <div><img src={vscode} alt="vscode-icon" className="vscode-icon"/>
            <p>VS Code</p>
            </div>
          </li>
          <li>
            <div><img src={git} alt="git-icon" className="git-icon"/>
            <p>Git</p>
            </div>
          </li>
          <li>
            <div><img src={postgresql} alt="postgresql-icon" className="postgresql-icon"/>
            <p>PostgreSQL</p>
            </div>
          </li>
          <li>
            <div><img src={TW} alt="tailwind-icon" className="postgresql-icon"/>
            <p>Tailwind</p>
            </div>
          </li>
        </ul>
        </div>
        </div>

    <div className="experience-container">
        <h1 className="experience-heading">Experience</h1>
        {/* <h5 className="experience-subheading">Where I've worked</h5> */}
    </div>
    <div className="list-container">
        <ul className="experience-grid">
          <li>U.S. Army Veteran</li>
          <li>Core Technician for Telecommunications</li>
          <li>Correctional Officer</li>
          <li>Instructor Assistant with Learn Academy</li>
          <li>Internship with Learn Academy</li>
        </ul>
    </div>
    <br/>
    <br/>
    <br/>
      </section>
    
    )
  }


  

export default Resume