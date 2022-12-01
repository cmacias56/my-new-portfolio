import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer';
import Contact from './Sections/Contact';
import Home from './Sections/Home';
import Resume from './Sections/Resume';
import Projects from './Sections/Projects';
// import { Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  let component
  switch (window.location.pathname){
      case "/":
      component = <Home/>
    break
      case "/resume":
        component = <Resume/>
    break
      case "/projects":
        component = <Projects/>
    break
      case "/contact":
        component = <Contact/>
    break
  }
  return (
    <div className='App'>
      <Header/>
      {component}
  {/* <BrowserRouter> */}
    {/* <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/> */}
    {/* </Routes> */}
    {/* </BrowserRouter> */}
      <Footer/>
    </div>
  );
}

export default App;