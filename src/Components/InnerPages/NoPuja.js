import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
function InnerCon() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0,0); 
      document.getElementById("loadingId").style.display = "none";
      document.getElementById("resultId").style.display = "block";
    }, 3000);
  }, [])
  
  return (
    <div>
      <div className='mt-10 mb-auto' id = "loadingId">
        <img src="/images/Loading.gif" alt="Loading Spinner" className='ml-auto mr-auto mt-auto mb-auto h-10' />
        <p className='font-bold text-center mt-5'> Hang On! Fetching Puja Details for you.</p>
      </div>
      <div className='text-black' style = {{"display":"none"}} id = "resultId">
        <p className='text-center font-extrabold text-5xl pt-10'>Oops</p>
        <div className='text-center text-2xl pt-10'>Puja Details Not Available!</div>
        <div className='text-center font-bold pt-10'>Check internet connection or just go to home page</div>
        <div className='ml-auto mr-auto pt-7' style={{ "display": "flex", "justifyContent": "center" }}><Link to="/"><button className='p-5 hover:bg-black hover:text-white font-bold rounded-2xl'>Home</button></Link><Link to="/Services"><button className='p-5 hover:bg-black hover:text-white font-bold rounded-2xl'>Services</button></Link></div>
      </div>
    </div>
  )
}

export default InnerCon