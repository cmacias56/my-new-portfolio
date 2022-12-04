import '../Stylesheets/Home.css'
import React from 'react'
import github from "../assets/images/github-icon.png"
import linkedin from "../assets/images/linkedin-icon.png"

function Home() {
    return(
    
    <section className='page-container'>
        <div className='home-container'>
            <h1 >Christian Macias</h1>
            <p>Full-Stack Developer</p>
            
            {/* <h1 className='greeting-heading'>Hello! I'm a Full-Stack Developer, can't wait for us to work together!</h1> */}
            <br/>
           <h1>About Me</h1>
           <br/>
           <h2>  Hello! My name is Christian, I am a Full-Stack Developer that has served as a Cavalry Scout in the US Army. I've attended LEARN Academy where I have studied extensively in both front-end and back-end development using languages such as JavaScript, Ruby, CSS, ect.. Since then, I have completed a few projects as well as my portfolio and intend to complete further projects in the future. I am hungry to gain so much more knowledge and enhance my skills even further. 
I can't wait to begin working with a company that is exciting, innovative, and is making a positive impact for the future.  </h2>
                {/* <h3 className='media-link'>Give it a look!</h3> */}
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