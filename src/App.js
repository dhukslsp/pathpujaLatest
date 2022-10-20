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
  var i = 0;
  window.onload = function(){
    console.log("Hello World");
    if(i>0){
      window.location.replace("http://www.w3schools.com");
    }
    i++;
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
          <Route exact path="*" element={<PageNotFound/>}/>
        </Routes>
      </Notestate>
    </div>

  );
}

export default App;
