import React from 'react'
import { Link } from 'react-router-dom'
function HomePage() {
    return (
        <div className='maindiv bg-white'>
            <div className="background">
                <div className='block list-none h-24'>
                    <li className='flex float-right  m-4 inline-block'><a href="https://wa.me/message/FQEMMDOIGPGPJ1" target="_blank"><img src="/images/WhatsApp.png" alt="" srchSet="" className='h-7 align-middle hover:cursor-pointer' style={{ "marginTop": "14px" }} /></a></li>
                    <li className='float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-white hover:bg-white hover:text-black hover:cursor-pointer inline-block'><Link to="/About">About Us</Link></li>
                    <li className='float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-white hover:bg-white hover:text-black hover:cursor-pointer inline-block'><Link to="/Services">Services</Link></li>
                    <li className='float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-white hover:bg-white hover:text-black hover:cursor-pointer inline-block'>Home</li>
                </div>
                <div className='block h-12'>
                    <img src="./images/Pathpujalogo.png" className='h-26 w-90 ml-auto mr-auto rounded-7xl' id="homelogo" />
                    <div className='text-white text-center text-4xl mt-6'> There is always room for <p className='mt-4'>PATHPUJA</p> </div>
                    <div className='text-white text-center text-xl mt-4'> Line to be next </div>
                    <div className='flex justify-center mb-14'>
                        <div className="flex justify-center flex-col flex-shrink" style={{ "width": "40pc"}}>
                            <form className="flex items-center" style={{"height":"3pc"}}>
                            <select className="select select-bordered mr-0">
                                <option disabled selected>Choose your City</option>
                                <option>Star Wars</option>
                            </select>
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full" style={{ "width": "800%" }}>
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your puja from our website" required="" />
                                </div>
                                <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    <span className="sr-only">Search</span>
                                </button>
                            </form>

                            <button type="button" className="ml-auto mr-auto w-1/3 inline-block mt-4 px-6 py-2.5 bg-blue-600 text-white font-lg  font-extrabold text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">View All Services</button>
                        </div>
                    </div>
                    <div className='flex justify-center flex-wrap'>
                        <div className='h-12 m-7 p-7 flex flex-nowrap flex-col justify-center ' style={{ "border": "2px solid black", "height": "18pc", "borderRadius": "3pc", "backgroundColor": "#F1E9DC" }}>
                            <img src="/images/indian-pandit-standing-in-welcome-pose-2775571-2319304.webp" alt="" srchSet="" className='h-60' />
                            <p className='font-bold text-center text-2xl text-black'>350+ Pandit Jis</p>
                        </div>
                        <div class="w-5 h-14 border-black" style={{ "background": "black", "height": "20pc", "width": "1px" }}></div>
                        <div className='h-12 m-7 p-10 flex flex-nowrap flex-col justify-center' style={{ "border": "2px solid black", "height": "18pc", "borderRadius": "3pc", "backgroundColor": "#F1E9DC" }}>
                            <img src="/images/ganesha-agni-puja-homa-hinduism-yajna-upanayana-varalakshmi-vratam-png-clipart-removebg-preview.png" alt="" srchSet="" className='h-60' />
                            <p className='font-bold text-center text-2xl mt-0 text-black'>500+ Puja Performed</p>
                        </div>
                        <div class="w-5 h-14 border-black" style={{ "background": "black", "height": "20pc", "width": "1px" }}></div>
                        <div className='h-12 m-7 flex flex-nowrap flex-col justify-center' style={{ "border": "2px solid black", "height": "18pc", "borderRadius": "3pc", "backgroundColor": "#F1E9DC" }}>
                            <img src="/images/png-clipart-mahalaya-hindu-holiday-symbol-kalasha.png" alt="" srchSet="" className='h-60' />
                            <p className='font-bold text-center text-2xl text-black'>100+ Types of Puja</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage