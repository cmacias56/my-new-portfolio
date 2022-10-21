import React from "react";
import '../Stylesheets/Projects.css';
import ash from '../assets/images/ash.png'
import pig from '../assets/images/pig-latin.png'

function Projects () {
    return (
    <>
    <section id="Projects">
        <div className="project-container">
        <h2 className="game">Feel free to play a game or two!</h2>
        <p className="instruction-paragraph">Click on the image to open the app.</p>
        <a href="https://cmacias56.github.io/" target="_blank" rel="noreferrer"><img src= {ash} alt="" className="ash.png"/></a>
        <p className="description">This was application is An "Evil Dead" treasure hunt game and was created using HTML and CSS</p>
        <a href="https://github.com/cmacias56/Pig-Latin-Translator/tree/main/src" target="_blank" rel="noreferrer"><img src= {pig} alt="" className="pig-latin-png" height="200px"/></a> 
        <p className="description">This Pig latin translator was created using React. The pair programming technique was utilized in completing this app!</p>
            {/* <a href put in the link to your progect from github/>*/}
        </div>
    </section>
    </>
    )
}
export default Projects 