import React from 'react'
import { Link } from "react-router-dom"
function Navbar() {
  const navigation = () => {
    if (document.getElementById("listing").style.display === "block"){
      document.getElementById("listing").style.display = "none"
      document.getElementById("mainhead").style.height = "6rem"
    }
    else{
      document.getElementById("listing").style.display = "block"
      document.getElementById("mainhead").style.height = "12pc"
    }
  }
  return (
    <div>
      <div className='block list-none h-24' style={{ "backgroundColor": "#f2e9dc" }} id = "mainhead">
        <li className='listingbut float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-white hover:text-white hover:cursor-pointer inline-block' id = "listbut"><button onClick={navigation}><img src="./images/menu.png" alt="" className='h-7'/></button></li>      
      <div id="listing">
        <li className='listed  flex float-right  m-4'><a href="https://wa.me/message/FQEMMDOIGPGPJ1" target="_blank"><img src="/images/WhatsApp.png" alt="" srchSet="" className='h-7 align-middle hover:cursor-pointer' style={{ "marginTop": "14px" }} /></a></li>
        <li className='listed float-right  m-4 duration-7image.png00 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-black hover:text-white hover:cursor-pointer inline-block'><Link to="/About">About Us</Link></li>
        <li className='listed float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-black hover:text-white hover:cursor-pointer inline-block'><Link to="/Services">Services</Link></li>
        <li className='listed float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-black hover:bg-black hover:text-white hover:cursor-pointer inline-block'><Link to="/">Home</Link></li>
      </div>
      </div>
    </div>
  )
}

export default Navbar