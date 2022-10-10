import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
  return (
    <div className="navbar" style = {{"background":"#fef3ea","height":"2pc"}}>
      <div className="flex-1">
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
        <li><Link to="/" className='font-bold text-black'>Home</Link></li>
        <li><Link to="/Services" className='font-bold text-black'>Services</Link></li>
        <li><Link to="/About" className='font-bold text-black'>About Us</Link></li>
        <li><a className='mt-auto mb-2' href="https://wa.me/message/FQEMMDOIGPGPJ1" target="_blank"><img src="/images/WhatsApp.png" alt="" srchSet="" className='h-7 align-middle hover:cursor-pointer' style={{ "marginTop": "14px" }} /></a></li>
        </ul>
      </div>
      <div style={{ "userSelect": "none" }}>
    </div>
    </div>
  )
}

export default Navbar