import React, { Component, useContext } from 'react'
import Navbar from './Navbar'
import ContextCreat from '../Context/Contextcreat';
import { Link } from "react-router-dom"
function Ourservices() {

    const mycontext = useContext(ContextCreat);
    const { fetchallnotes } = mycontext;
    return (
        <div style={{ "userSelect": "none"  ,"background":"#fef3ea"}}>
            <Navbar />
            <p className='text-2xl text-black font-bold text-center pt-1'>Choose Your Pooja From here</p>
            <div className='flex flex-wrap sm:flex-col lg:flex-row justify-center mt-8'>
                <ul onClick={() => { document.getElementById("dropdown-menu").style.display === "none" ? document.getElementById("dropdown-menu").style.display = "block" : document.getElementById("dropdown-menu").style.display = "none" }}>
                    <li className="dropdown lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide p-7" >
                        <a>Puja</a>
                        <div className="hidden h-auto flex pt-4" id="dropdown-menu">
                            <ul className="block w-full shadow px-12 py-8 hover:text-black list-decimal">
                                <li className="py-1" onClick={()=>{fetchallnotes("Rudrabhishek puja")}}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Rudrabhishek Puja</Link></li>
                                <li className="py-1" onClick={()=>{fetchallnotes("Satyanarayana Puja")}}><Link to = "/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Satyanarayana Puja</Link></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Aayusha Homa</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Navgraha Homa</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Gandmool Nakshatra Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Ganesh Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Annaprashan Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Namkaran Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Annaprashan Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Bhoomi Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Bhoomi Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Griha Pravesh </a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vivah</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Roka Ceremony</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Graha Shanti Puja </a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Kuber Upasana / Laxmi Kuber homa</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Maha Laxmi puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Office Opening Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Saraswati Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Shuddhi Karan  Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vishvakarma Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Janeyu Sanskar (Upnayan)</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Maha Shivratri Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vechile Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Karwa Chauth</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vidhya Arambham</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Gauri Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Punsavan Sanskar</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Ekadashi Vrat Udayapan Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Sai Sandhya</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Chatti Pujaan</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Daseva-Teravhin Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Lalitha Sasharnam Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Solah Sombar Udapanan Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Dhanvantri Homam</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul onClick={() => { document.getElementById("dropdown-menu2").style.display === "none" ? document.getElementById("dropdown-menu2").style.display = "block" : document.getElementById("dropdown-menu2").style.display = "none" }}>
                    <li className="dropdown2 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
                        <a>JAAP</a>
                        <div className="hidden h-auto flex pt-4" id="dropdown-menu2">
                            <ul className="block w-full shadow px-12 py-8 list-disc">
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Graha Shanti Jaap</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Gyatri mantra Jaap</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Mahamrityunjaya Jaap</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Santan Gopal Mantra Jaap</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul onClick={() => { document.getElementById("dropdown-menu3").style.display === "none" ? document.getElementById("dropdown-menu3").style.display = "block" : document.getElementById("dropdown-menu3").style.display = "none" }}>
                    <li className="dropdown3 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
                        <a>Path/Havan</a>
                        <div className="hidden h-auto flex pt-4" id="dropdown-menu3">
                            <ul className="block w-full shadow px-12 py-8">
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Maha Ganpati homa </a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Durga Saptshati/Parayana/Chandi Homa/Durga Homa</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Lakshmi Narsimha Homa</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Akhand Ramayana Paath</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Sunderkand Paath </a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Garud Puran Paath </a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Hanuman Chalisa</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul onClick={() => { document.getElementById("dropdown-menu4").style.display === "none" ? document.getElementById("dropdown-menu4").style.display = "block" : document.getElementById("dropdown-menu4").style.display = "none" }}>
                    <li className="dropdown4 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
                        <a>Festival Puja</a>
                        <div className="hidden h-auto flex pt-4" id="dropdown-menu4">
                            <ul className="block w-full shadow px-12 py-8">
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Navratri Kalash Sthapna</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Dhanteras Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Diwali Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Dussera Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Hartalika Teej Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Holika Puja</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul onClick={() => { document.getElementById("dropdown-menu5").style.display === "none" ? document.getElementById("dropdown-menu5").style.display = "block" : document.getElementById("dropdown-menu5").style.display = "none" }}>
                    <li className="dropdown5 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide p-7">
                        <a>Shanti Puja</a>
                        <div className="hidden h-auto flex pt-4" id="dropdown-menu5">
                            <ul className="block w-full shadow px-12 py-8">
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vastu Shanti Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Kumbh / Vishnu Vivah</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Tulsi Vivah</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Ark Vivah / Male</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Manglik Shanti </a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Tripad Nakshtra Dosha Shanti Puja </a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Kaal Sarp Dosh Puja </a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vishti Karan Dosh Puja</a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Tula Daan </a></li>
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Pitra Dosh Shanti Puja </a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul onClick={() => { document.getElementById("dropdown-menu6").style.display === "none" ? document.getElementById("dropdown-menu6").style.display = "block" : document.getElementById("dropdown-menu6").style.display = "none" }}>
                    <li className="dropdown6 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide p-7">
                        <a>PITRA Puja</a>
                        <div className="hidden h-auto pt-4" id="dropdown-menu6">
                            <ul className="block w-full shadow px-12 py-8">
                                <li className="py-1"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Narayana Bali</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Ourservices
