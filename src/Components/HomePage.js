import React from 'react'
import { Link } from 'react-router-dom'
function HomePage() {
    return (
        <div className='homequery h-full flex flex-row'>
            <div style={{ "backgroundColor": "#fcf5eb", "height": "50pc" }} className="h-full" >
                <img src="/images/A2.png" alt="ganesh Ji Image" className="p-0"/>
                <div className='p-10'>
                    <img src="/images/A3.png" alt="there is always room for pathpuja" className="p-0 ml-auto mr-auto mb-10" style = {{"height":"12pc","marginTop":"16px"}}/>
                    <img src="/images/A4.png" alt="Sub Nav" className="p-0" />
                </div>
                <div className='w-full flex justify-center'>
                    <input type="search" className='ml-auto mr-2 p-4' style = {{"border":"3px solid #ba4b2f","color":"#ba4b2f","backgroundColor":"rgb(252 245 235)"}} placeholder="Enter Puja Hawan Etc"/>
                    <button className='p-4 ml-10 mr-auto' style = {{"border":"3px solid #ba4b2f","color":"#ba4b2f","backgroundColor":"rgb(252 245 235)","fontSize":"21px"}}>View Services</button>
                </div>
            </div>
            <div style={{ "backgroundColor": "#efa593" }} >
                <div>
                    <div className="navbar bg-base-100 font-extrabold mt-5" style={{ "backgroundColor": "#efa593" }}>
                        <div className="flex-1">
                        </div>
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0 font-extrabold text-xl">
                                <li><Link to = "/">Home</Link></li>
                                <li><Link to = "/Services">Services</Link></li>
                                <li><Link to = "/About">About Us</Link></li>
                                <li><img className='p-2' src="/images/WhatsApp.png" alt="" style={{ "height": "3pc", "paddingTop": "11px" }} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <img src="/images/A1.png" alt="ganesh Ji Image" className="p-20 pt-5" />
            </div>
        </div>
    )
}

export default HomePage