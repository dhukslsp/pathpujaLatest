import React from 'react'
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <div>
      <div className='block list-none h-24' style={{"backgroundColor":"#f2e9dc"}}>
        <li className='listingbut float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-black hover:text-white hover:cursor-pointer inline-block'><button>This is a button</button></li>
        <li className='listed  flex float-right  m-4 inline-block'><a href="https://wa.me/message/FQEMMDOIGPGPJ1" target="_blank"><img src="/images/WhatsApp.png" alt="" srchSet="" className='h-7 align-middle hover:cursor-pointer' style={{ "marginTop": "14px" }} /></a></li>
        <li className='listed float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-black hover:text-white hover:cursor-pointer inline-block'><Link to="/About">About Us</Link></li>
        <li className='listed float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-black hover:text-white hover:cursor-pointer inline-block'>Services</li>
        <li className='listed float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-black hover:text-white hover:cursor-pointer inline-block'><Link to="/">Home</Link></li>
      </div>
    </div>
  )
}

export default Navbar