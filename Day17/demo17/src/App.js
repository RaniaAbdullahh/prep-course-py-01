
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import {Routes, Route} from 'react-router-dom';
import Heder from './Components/Header';

function App() {
  return (
    <>
    <Heder/>
    {/* <h1>Hello from app component</h1> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About/>} />
      </Routes>
   
    
     
    </>
  );
}

export default App;
