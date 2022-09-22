import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
  const navigation = () => {
    if (document.getElementById("listing").style.display === "block") {
      document.getElementById("listing").style.display = "none"
      document.getElementById("mainhead").style.height = "6rem"
    }
    else {
      document.getElementById("listing").style.display = "block"
      document.getElementById("mainhead").style.height = "12pc"
    }
  }
  return (
    <div style={{ "userSelect": "none" }}>
      <div className='block list-none h-24' style={{ "backgroundColor": "rgb(254 243 234)" }} id="mainhead">
        <li className='listingbut float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-white hover:text-white hover:cursor-pointer inline-block' id="listbut"><button onClick={navigation}><img src="./images/menu.png" alt="" className='h-7' /></button></li>
        <li className='listed  flex float-right  m-4'>
          <div id="listing">
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">99+</span>
              <button className="btn text-white">My Cart</button>
            </div>
          </div>
        </li>
        <li className='listed  flex float-right  m-4'><a href="https://wa.me/message/FQEMMDOIGPGPJ1" target="_blank"><img src="/images/WhatsApp.png" alt="" srchSet="" className='h-7 align-middle hover:cursor-pointer' style={{ "marginTop": "14px" }} /></a></li>
        <li className='listed float-right  m-4 duration-7image.png00 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-indigo-600 hover:text-white hover:cursor-pointer inline-block'><Link to="/About">About Us</Link></li>
        <li className='listed float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-indigo-600 hover:text-white hover:cursor-pointer inline-block'><Link to="/Services">Services</Link></li>
        <li className='listed float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-indigo-600 hover:text-white hover:cursor-pointer inline-block'><Link to="/">Home</Link></li>
      </div>
    </div>
  )
}

export default Navbar