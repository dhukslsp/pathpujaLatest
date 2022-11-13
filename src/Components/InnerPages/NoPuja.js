import React from 'react'
import { Link } from "react-router-dom"
function InnerCon() {
  return (
    <div className='text-black'>
    <p className='text-center font-extrabold text-5xl pt-10'>Oops</p>
      <div className='text-center text-2xl pt-10'>Puja Details Not Available</div>
      <div className='text-center font-bold pt-10'>Check internet connection or just go to home page</div>
      <div className='ml-auto mr-auto pt-7' style={{"display":"flex","justifyContent":"center"}}><Link to = "/"><button className='p-5 hover:bg-black hover:text-white font-bold rounded-2xl'>Home</button></Link><Link to = "/Services"><button className='p-5 hover:bg-black hover:text-white font-bold rounded-2xl'>Services</button></Link></div>
    </div>
  )
}

export default InnerCon