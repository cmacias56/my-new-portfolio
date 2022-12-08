import '../Stylesheets/Home.css'
import React from 'react'
import github from "../assets/images/github-icon.png"
import linkedin from "../assets/images/linkedin-icon.png"
import Typewriter from 'typewriter-effect';

function Home() {
    return(
    
    <section className='page-container'>
        <div className='home-container'>
            <div className='name'><h1 >Christian Macias</h1>
            <p>Full-Stack Developer</p>
            </div>
            <br/>
            <br/>
            
           <div className='greeting'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .changeDelay(60)
                    .typeString("Hello! I'm a Full-Stack Developer looking forward to working with you!")
                    .pauseFor(1000)                
                    .start()
                }}
                />
           </div>
           <br/>
           <br/>
           <div className='type'>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                    .pauseFor(5500)
                    .changeDelay(35)
                    .typeString("Feel free to look around!")
                    .pauseFor(1000)                
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
    
 )
}

export default Home