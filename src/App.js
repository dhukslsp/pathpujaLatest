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
import SubpujaElm from './Components/OtherPujaPages/Subpuja/GrahaShantiElm';
import SubpujaDesc from './Components/OtherPujaPages/SubpujaDesc/SubpujaDesc';
import GrahaShnatiJaap from './Components/OtherPujaPages/Subpuja/GrahaShantiJaap'
function App() {
  window.onbeforeunload = function () {
    window.setTimeout(function () {
      window.location.href = "/";
    });
    window.onbeforeunload = null; // necessary to prevent infinite loop, that kills your browser 
  }
  return (
    <div className='m-0 p-0'>
      <Notestate>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Services' element={<Ourservices />} />
          <Route exact path='/AboutService' element={<Services />} />
          <Route exact path='/Detailing' element={<Detailing />} />
          <Route exact path="/Retailer" element={<Retailer />} />
          <Route exact path="/subpujadisp" element={<SubpujaDesc/>} />
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/Graha_Shanti_Puja" element={<SubpujaElm/>} />
          <Route exact path="/Graha_Shanti_Puja_+_Jaap" element={<GrahaShnatiJaap/>} />
        </Routes>
      </Notestate>
    </div>

  );
}

export default App;
