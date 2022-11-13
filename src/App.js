import './App.css';
import { Routes, Route,Link } from "react-router-dom";
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
  const NavigationClose = () =>{
    document.getElementById("sidebar").classList.toggle("active");
  }
  return (
    <div className='m-0 p-0'>
      <div id="sidebar">
        <ul className = "mt-7">
          <li onClick={NavigationClose}><img src="images/Navbar/Close(1).png" alt="" className='h-5 inline' /><p className='inline mt-auto mb-auto ml-2'>Close</p></li>
          <Link to = "/" onClick={NavigationClose}><li><img src="images/Navbar/hom(1).png" className='h-6 mt-auto mb-uato inline' alt="" srcset="" /> Home</li></Link>
          <Link to = "/Services" onClick={NavigationClose}><li><img src="images/Navbar/services.png" className='h-6 mt-auto mb-uato inline' alt="" /> Services</li></Link>
          <Link to = "/About" onClick={NavigationClose}><li><img src="images/Navbar/informatio_button.png" className='h-6 mt-auto mb-uato mr-1 inline' alt="" srcset="" />About Us</li></Link>
        </ul>
      </div>
      <Notestate>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/About' element={<About />} />
          <Route exact path='/Services' element={<Ourservices />} />
          <Route exact path='/AboutService' element={<Services />} />
          <Route exact path='/Detailing' element={<Detailing />} />
          <Route exact path="/Retailer" element={<Retailer />} />
          <Route exact path="/subpujadisp" element={<SubpujaDesc />} />
          <Route exact path="*" element={<PageNotFound />} />
          <Route exact path="/Graha_Shanti_Puja" element={<SubpujaElm />} />
          <Route exact path="/Graha_Shanti_Puja_+_Jaap" element={<GrahaShnatiJaap />} />
        </Routes>

      </Notestate>

    </div>

  );
}

export default App;
