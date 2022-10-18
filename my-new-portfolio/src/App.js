import Header from './Components/Header';
import './App.css';
import Footer from './Components/Footer';
import Contact from './Sections/Contact';
import Home from './Sections/Home';
import Resume from './Sections/Resume';

function App() {
  return (
    <div className='App'>
      <Header/>
      <br/>
      <br/>
      <Home/>
      <Resume/>
      <br/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;