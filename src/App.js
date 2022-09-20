import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import About from './Components/About';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Ourservices from './Components/Ourservices';
import ContextText from './Components/ContextText';
import Notestate from './Context/Notestate';
function App() {
  return (
    <div className='m-0 p-0'>
      <Notestate>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Ourservices />} />
          <Route path='/AboutService' element={<Services />} />
          <Route path='/my' element={<ContextText />} />
        </Routes>
        <Footer />
      </Notestate>
    </div>

  );
}

export default App;
