import React, { Component } from 'react'
import Navbar from './Navbar'
export default class Ourservices extends Component {
    render() {
        return (
            <div className='bg-white' style = {{"userSelect":"none"}}>
                <Navbar />
                <p className='text-2xl text-black font-bold text-center pt-1'>Choose Your Pooja From here</p>
                <div className='flex flex-wrap sm:flex-col lg:flex-row justify-center mt-8'>
                    <ul onClick={()=>{document.getElementById("dropdown-menu").style.display === "none"?document.getElementById("dropdown-menu").style.display = "block":document.getElementById("dropdown-menu").style.display = "none"}}>
                        <li className="dropdown lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide p-7" >
                            <a>Puja</a>
                            <div className="hidden h-auto flex pt-4" id = "dropdown-menu">
                                <ul className="block w-full bg-white shadow px-12 py-8">
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul onClick={()=>{document.getElementById("dropdown-menu2").style.display === "none"?document.getElementById("dropdown-menu2").style.display = "block":document.getElementById("dropdown-menu2").style.display = "none"}}>
                        <li className="dropdown2 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
                            <a>PATH/HAWAN</a>
                            <div className="hidden h-auto flex pt-4" id = "dropdown-menu2">
                                <ul className="block w-full bg-white shadow px-12 py-8">
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul onClick={()=>{document.getElementById("dropdown-menu3").style.display === "none"?document.getElementById("dropdown-menu3").style.display = "block":document.getElementById("dropdown-menu3").style.display = "none"}}>
                        <li className="dropdown3 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
                            <a>JAAP</a>
                            <div className="hidden h-auto flex pt-4" id = "dropdown-menu3">
                                <ul className="block w-full bg-white shadow px-12 py-8">
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul onClick={()=>{document.getElementById("dropdown-menu4").style.display === "none"?document.getElementById("dropdown-menu4").style.display = "block":document.getElementById("dropdown-menu4").style.display = "none"}}>
                        <li className="dropdown4 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
                            <a>Festival Puja</a>
                            <div className="hidden h-auto flex pt-4" id = "dropdown-menu4">
                                <ul className="block w-full bg-white shadow px-12 py-8">
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul onClick={()=>{document.getElementById("dropdown-menu5").style.display === "none"?document.getElementById("dropdown-menu5").style.display = "block":document.getElementById("dropdown-menu5").style.display = "none"}}>
                        <li className="dropdown5 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide p-7">
                            <a>Shanti Puja</a>
                            <div className="hidden h-auto flex pt-4" id = "dropdown-menu5">
                                <ul className="block w-full bg-white shadow px-12 py-8">
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul onClick={()=>{document.getElementById("dropdown-menu6").style.display === "none"?document.getElementById("dropdown-menu6").style.display = "block":document.getElementById("dropdown-menu6").style.display = "none"}}>
                       <li className="dropdown6 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide p-7">
                            <a>PITRA Puja</a>
                            <div className="hidden h-auto pt-4" id = "dropdown-menu6">
                                <ul className="block w-full bg-white shadow px-12 py-8">
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 2</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 3</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 4</a></li>
                                    <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Item 5</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
