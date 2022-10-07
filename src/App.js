import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './Components/HomePage';
import About from './Components/About';
import Ourservices from './Components/Ourservices';
import Notestate from './Context/Notestate';
import Detailing from './Components/Detailing';
import Services from './Components/Services';
import Retailer from './Components/Retailer';
import PageNotFound from './Components/PageNotFound'

function App() {
  return (
    <div className='m-0 p-0'>
      <Notestate>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/About' element={<About />} />
          <Route path='/Services' element={<Ourservices />} />
          <Route path='/AboutService' element={<Services />} />
          <Route path='/Detailing' element={<Detailing />} />
          <Route path="/Retailer" element={<Retailer />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Notestate>
    </div>

  );
}

export default App;
