import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import About from './Components/About';
import Footer from './Components/Footer';
function App() {
  return (
    <div className='m-0 p-0'>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
      <Footer/>
    </div>

  );
}

export default App;
