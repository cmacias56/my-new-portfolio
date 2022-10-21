import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer';
import Contact from './Sections/Contact';
import Home from './Sections/Home';
import Resume from './Sections/Resume';
import Projects from './Sections/Projects';

function App() {
  return (
    <div className='App'>
      <Header/>
      <br/>
      <br/>
      <Home/>
      <Resume/>
      <Projects/>
      <br/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;