import '../Stylesheets/Home.css'
import React from 'react'
import '../App.css'
import github from "../assets/images/github-icon.png"
import linkedin from "../assets/images/linkedin-icon.png"

function Home() {
    return(
    
    <section>
        <div className='home-container'>
            <br/>
            <h1 className='name-title'>Christian Macias</h1>
            <p>Full-Stack Developer</p>
            
            <h1 className='greeting-heading'>Hello! I'm a Full-Stack Developer, can't wait for us to work together!</h1>
            <br/>
           <h1>About Me</h1>
           <br/>
           <p>  I am an Army Vet that has found his calling in coding. I have taken many steps to perfect my craft. I aim to constantly grow to higher standard and learn every step of the way!  </p>
        </div>
                {/* <h3 className='media-link'>Give it a look!</h3> */}
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