import React from "react";
import '../Stylesheets/Projects.css';
import ash from '../assets/images/ash.png'
import pig from '../assets/images/pig-latin.png'
import pasta from '../assets/images/TheImpastas.png'

function Projects () {
    return (
    <>
    <section id="Projects">
        <div className="project-container">
        <h2 className="game">Feel free to play a game or two!</h2>
        <p className="instruction-paragraph">Click on the image to open the app.</p>
        <a href="https://cmacias56.github.io/" target="_blank" rel="noreferrer"><img src= {ash} alt="" className="ash.png"/></a>
        <p className="description">This was application is An "Evil Dead" treasure hunt game and was created using HTML and CSS</p>
        <br/>
        <a href="https://github.com/cmacias56/Pig-Latin-Translator/tree/main/src" target="_blank" rel="noreferrer"><img src= {pig} alt="" className="pig-latin-png" height="200px"/></a> 
        <p className="description">This Pig latin translator was created using React. The pair programming technique was utilized in completing this app!</p>
        <br/>
        <a href="https://perfect-pasta-pairings.herokuapp.com/" target="_blank" rel="noreferrer"><img src={pasta} height="200px"/></a>
        <p className="pasta">This is a capstone project that was completed using mob, pair, and individual programing to complete. Utilized React in Rails to complete this project.</p>
        </div>
    </section>
    </>
    )
}
export default Projects 