import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function HomePage() {    
    return (
        <div>
            <div className='bg-white text-black'>
                <div className='homequery h-full flex flex-row'>
                    <div style={{ "backgroundColor": "#fcf5eb", "height": "50pc" }} >
                        <img src="/images/A2.png" alt="ganesh Ji Image" className="p-0" />
                        <div className='p-10'>
                            <img src="/images/A3.png" alt="there is always room for pathpuja" className="p-0 ml-auto mr-auto mb-10" style={{ "height": "12pc", "marginTop": "16px" }} />
                            <img src="/images/A4.png" alt="Sub Nav" className="p-0" />
                        </div>
                        <div className='w-full flex justify-center flex-wrap divElements'>
                            <input type="search" className='ml-auto lg:mr-2 p-4 mt-8 sm:mr-auto ' style={{ "border": "3px solid #ba4b2f", "color": "#ba4b2f", "backgroundColor": "rgb(252 245 235)", "width": "22pc" }} placeholder="Enter Puja Hawan Etc" />
                            <button className='p-4 lg:ml-10 mr-auto mt-8' id="homeBut" style={{ "border": "3px solid #ba4b2f", "color": "#ba4b2f", "backgroundColor": "rgb(252 245 235)", "fontSize": "21px" }}><Link to="/Services">View Services</Link></button>
                        </div>
                    </div>
                    <div style={{ "backgroundColor": "#efa593" }} >
                        <div>
                            <div className="navbar bg-base-100 font-extrabold mt-5" style={{ "backgroundColor": "#efa593" }}>
                                <div className="flex-1">
                                </div>
                                <div className="flex-none">
                                    <ul className="menu menu-horizontal p-0 font-extrabold text-xl text-black">
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/Services">Services</Link></li>
                                        <li><Link to="/About">About Us</Link></li>
                                        <li><img className='p-2' src="/images/WhatsApp.png" alt="" style={{ "height": "3pc", "paddingTop": "11px" }} /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img src="/images/A1.png" alt="ganesh Ji Image" className="p-20 pt-5" />
                    </div>
                </div>
                <div style={{ "background": "#efa593", "border-top": "6px solid black;", "width": "full" }}>
                    <p className='text-center pt-7 font-extrabold' style={{ "color": "#ba4b2f", "fontSize": "48px", }}>Services</p>
                    <div className='flex flex-row justify-center flex-wrap'>
                        <div className='h-full p-10'>
                            <img src="/images/S.png" alt="" style={{ "height": "30pc" }} />
                        </div>
                        <div className='h-full p-10'>
                            <img src="/images/Sa.png" alt="" style={{ "height": "30pc" }} />
                        </div>
                        <div className='h-full p-10'>
                            <img src="Sb.png" alt="" style={{ "height": "30pc" }} />
                        </div>
                    </div>
                </div>
                <div style={{ "background": "#fcf5eb", "border-top": "6px solid black;", "width": "full" }} className="newcolor">
                    <p className='text-center pt-7 font-extrabold' style={{ "color": "#ba4b2f", "fontSize": "48px", }}>Services</p>
                    <div className='flex justify-center flex-wrap'>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc1.png" alt="" style={{ "height": "7pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Easy Booking</p>
                        </div>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc2.png" alt="" style={{ "height": "7pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Modest Pricing</p>
                        </div>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc3.png" alt="" style={{ "height": "7pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Professional Team</p>
                        </div>
                    </div>
                    <div className='flex justify-center flex-wrap'>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc4.png" alt="" style={{ "height": "7pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Full Guidance <br /> and Support</p>
                        </div>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc5.png" alt="" style={{ "height": "7pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Experienced priest</p>
                        </div>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc6.png" alt="" style={{ "height": "7pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold width-auto'>Puntuality Promse</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage