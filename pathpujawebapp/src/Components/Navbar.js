import { React } from 'react'
import { Link } from "react-router-dom"
function Navbar() {
  const showNav = window.screen.width > 500 ? "" : "none";
  return (
    <div>
      <div id="mobileLogo">
      <div><img alt = "No internet" src="/images/homeing/A2.png" /></div><i className="fa fa-bars p-5 " style = {{"background":"#fef3ea"}} onClick={()=>{document.getElementById("sidebar").classList.toggle("active")}}></i>
      </div>
      <div className="navbar overflow-y-auto" id="navdisp" style={{ "background": "#fef3ea", "height": "6rem", "borderBottom": "2px solid black", "display": showNav }}>
        <div className="flex-1" id="img1">
          <Link to="/"><img alt = "No internet" src="/images/homeing/pathpujaLogoBackrem.png" style={{ "height": "4.5rem", "marginLeft": "2pc" }} /></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-bold text-xl text-black">
            <li><Link to="/"><img src="/images/Navbar/hom(1).png" className='h-7' alt="" />Home</Link></li>
            <li><Link to="/Services"><img src="/images/Navbar/services.png" className='h-7' alt="" />Services</Link></li>
            <li><Link to="/About"><img src="/images/Navbar/informatio_button.png" className='h-7' alt="" />About Us</Link></li>
          </ul>
        </div>
        <div style={{ "userSelect": "none" }}>
        </div>
      </div>
    </div>
  )
}

export default Navbar