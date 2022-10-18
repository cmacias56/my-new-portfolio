import '../Stylesheets/Home.css'
import React from 'react'
import '../App.css'
import github from "../assets/images/github-icon.png"

function Home() {
    return(
    
    <section>
        <div>
            <h1>Christian Macias</h1>
            <p>Full-Stack Developer</p>
            <br/>
            <h1>Hello! I'm a Full-Stack Developer, can't wait for us to work together!</h1>
        </div>
                {/* <h3>Give it a look!</h3> */}
        <div className = 'social-button-container'>
         <ul>
            <a href="https://github.com/cmacias56" target="_blank" rel="noreferrer"><img src={github} alt="github icon" className='github'/></a>

            {/* insert linkedin */}
         </ul>
        </div>
    </section>
    
 )
}

export default Home