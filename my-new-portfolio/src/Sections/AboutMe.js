import React from "react";
import '../Stylesheets/Home.css';
import Typewriter from 'typewriter-effect';
import github from "../assets/images/github-icon.png";
import linkedin from "../assets/images/linkedin-icon.png";
import army from "../assets/images/army.png"


const AboutMe = () => {

  return(
    <>
    <section className='page-container'>
      <br/>
      <br/>
        <div className="img"><img src={army} alt="army" className="me" height="300px" width="450px"/></div>
        <div className='home-container'>
            <br/>
            <br/>
           <div className='type'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .changeDelay(18)
                    .typeString("Hello! My name is Christian, I am a Full-Stack Developer that has served as a Cavalry Scout in the US Army.")
                    .pauseFor(1000)
                    .typeString(" I've attended LEARN Academy where I have studied extensively in both front-end and back-end development using languages such as JavaScript, Ruby, CSS, etc..")
                    .pauseFor(1000)
                    .typeString(" Since then, I have completed a few projects as well as my portfolio and intend to complete further projects in the future.")
                    .pauseFor(1000)
                    .typeString(" I am hungry to gain so much more knowledge and enhance my skills even further.")
                    .pauseFor(1000)
                    .typeString(" I can't wait to begin working with a company that is exciting, innovative, and is making a positive impact for the future.")
                    .start()
                }}
                />
           </div>
        </div>
        <br/>
        <br/>
        <p className='link'>Here are links to my GitHub and Linkedin</p>
        <div className = 'social-button-container'>
         <ul>
            <a href="https://github.com/cmacias56" target="_blank" rel="noreferrer"><img src={github} alt="github icon" className='github'/></a>
            <a href="https://www.linkedin.com/in/christianmacias91/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin icon" className='linkedin'/></a>

         </ul> 
        </div>
     </section>   
    </>
  )
}

export default AboutMe