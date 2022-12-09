import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer';
import Contact from './Sections/Contact';
import Home from './Sections/Home';
import Resume from './Sections/Resume';
import Projects from './Sections/Projects';
import AboutMe from './Sections/AboutMe';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <div className='App'>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/aboutme" element={<AboutMe/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;