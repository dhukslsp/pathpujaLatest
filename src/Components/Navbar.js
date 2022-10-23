import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div>
      <Link to="/"><img src="/images/A2.png" id = "mobileLogo"/></Link>
      <div className="navbar overflow-y-auto" style={{ "background": "#fef3ea", "height": "6rem", "borderBottom": "2px solid black" }}>
        <div className="flex-1" id="img1">
          <Link to="/"><img src="/images/pathpujaLogoBackrem.png" alt="" style={{ "height": "4.5rem", "marginLeft": "2pc" }} /></Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 font-extrabold text-xl text-black">
            <li><Link className='pt-0  pb-0' to="/">Home</Link></li>
            <li><Link className='pt-0  pb-0' to="/Services">Services</Link></li>
            <li><Link className='pt-0  pb-0' to="/About">About Us</Link></li>
            <li><a className='mt-auto pt-0 pb-0 mb-2' href="https://wa.me/message/FQEMMDOIGPGPJ1" target="_blank"><img className='p-2' src="/images/WhatsApp.png" alt="" style={{ "height": "3pc", "paddingTop": "11px" }} /></a></li>
          </ul>
        </div>
        <div style={{ "userSelect": "none" }}>
        </div>
      </div>
    </div>
  )
}

export default Navbar