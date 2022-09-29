import React, { Component, useContext } from 'react'
import Navbar from './Navbar'
import ContextCreat from '../Context/Contextcreat';
import { Link } from "react-router-dom"
import Footer from './Footer'
function Ourservices() {

    const mycontext = useContext(ContextCreat);
    const { fetchallnotes } = mycontext;
    return (
        <div style={{ "userSelect": "none", "background": "#fef3ea" }}>
            <Navbar />
            <p className='text-2xl text-black font-bold text-center pt-1'>Choose Your Pooja From here</p>
            <div className='flex flex-wrap sm:flex-col lg:flex-row justify-center mt-8'>
                <ul onClick={() => { document.getElementById("dropdown-menu").style.display === "none" ? document.getElementById("dropdown-menu").style.display = "block" : document.getElementById("dropdown-menu").style.display = "none" }}>
                    <li className="dropdown lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide p-7" >
                        <a>Puja</a>
                        <div className="hidden h-auto flex pt-4" id="dropdown-menu">
                            <ul className="block w-full shadow px-12 py-8 hover:text-black list-decimal">
                                <li className="py-1" onClick={() => { fetchallnotes("Rudrabhishek puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Rudrabhishek Puja</Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Satyanarayana Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Satyanarayana Puja</Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Aayusha Homa") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Aayusha Homa</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Navgraha Homa") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Navgraha Homa</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Gandmool Nakshatra Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Gandmool Nakshatra Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Ganesh Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Ganesh Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Annaprashan Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Annaprashan Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Namkaran Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Namkaran Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Annaprashan Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Annaprashan Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Bhoomi Pujan") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Bhoomi Pujan</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Griha Pravesh") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Griha Pravesh </a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Vivah") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vivah</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Roka Ceremony") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Roka Ceremony</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Graha Shanti Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Graha Shanti Puja </a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Kuber Upasana / Laxmi Kuber homa") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Kuber Upasana / Laxmi Kuber homa</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Maha Lakshmi Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Maha Laxmi puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Office Opening Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Office Opening Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Saraswati Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Saraswati Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Shuddhi Karan  Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Shuddhi Karan  Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Vishvakarma Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vishvakarma Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Janeyu Sanskar (Upnayan)") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Janeyu Sanskar (Upnayan)</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Maha Shivratri Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Maha Shivratri Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Vechile Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vechile Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Karwa Chauth") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Karwa Chauth</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Vidhya Arambham") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vidhya Arambham</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Gauri Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Gauri Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Punsavan Sanskar") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Punsavan Sanskar</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Ekadashi Vrat Udayapan Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Ekadashi Vrat Udayapan Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Griha Pravesh") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Sai Sandhya</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Chatti Pujaan") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Chatti Pujaan</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Daseva-Teravhin Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Daseva-Teravhin Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Lalitha Sasharnam Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Lalitha Sasharnam Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Solah Sombar Udapanan Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Solah Sombar Udapanan Puja</a></Link></li>
                                <li className="py-1" onClick={() => { fetchallnotes("Dhanvantri Homam") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Dhanvantri Homam</a></Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <ul onClick={() => { document.getElementById("dropdown-menu2").style.display === "none" ? document.getElementById("dropdown-menu2").style.display = "block" : document.getElementById("dropdown-menu2").style.display = "none" }}>
                    <li className="dropdown2 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
                        <a>JAAP</a>
                        <div className="hidden h-auto flex pt-4" id="dropdown-menu2">
                            <Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                                <ul className="block w-full shadow px-12 py-8 list-disc">
                                    <li className="py-1" onClick={() => { fetchallnotes("Graha Shanti Jaap") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Graha Shanti Jaap</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Gyatri Mantra") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Gyatri mantra Jaap</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Mahamrityunjaya Jaap") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Mahamrityunjaya Jaap</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Santan Gopal Mantra Jaap") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Santan Gopal Mantra Jaap</a></li>
                                </ul>
                            </Link>
                        </div>
                    </li>
                </ul>
                <ul onClick={() => { document.getElementById("dropdown-menu3").style.display === "none" ? document.getElementById("dropdown-menu3").style.display = "block" : document.getElementById("dropdown-menu3").style.display = "none" }}>
                    <li className="dropdown3 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
                        <a>Path/Havan</a>
                        <div className="hidden h-auto flex pt-4" id="dropdown-menu3">
                            <Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                                <ul className="block w-full shadow px-12 py-8">
                                    <li className="py-1" onClick={() => { fetchallnotes("Maha Ganpati Homa") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Maha Ganpati homa </a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Durga Saptshati/Parayana/Chandi Homa/Durga Homa") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Durga Saptshati/Parayana/Chandi Homa/Durga Homa</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Lakshmi Narsimha Homa") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Lakshmi Narsimha Homa</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Akhand Ramayana Paath") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Akhand Ramayana Paath</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Sunderkand Paath") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Sunderkand Paath </a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Garud Puran Paath") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Garud Puran Paath </a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Hanuman Chalisa") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Hanuman Chalisa</a></li>
                                </ul>
                            </Link>
                        </div>
                    </li>
                </ul>
                <ul onClick={() => { document.getElementById("dropdown-menu4").style.display === "none" ? document.getElementById("dropdown-menu4").style.display = "block" : document.getElementById("dropdown-menu4").style.display = "none" }}>
                    <li className="dropdown4 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide">
                        <a>Festival Puja</a>
                        <div className="hidden h-auto flex pt-4" id="dropdown-menu4">
                            <Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                                <ul className="block w-full shadow px-12 py-8">
                                    <li className="py-1"  onClick={() => { fetchallnotes("Navratri Kalash Sthapna") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Navratri Kalash Sthapna</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Dhanteras Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Dhanteras Puja</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Diwali Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Diwali Puja</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Dussera Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Dussera Puja</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Hartalika Teej Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Hartalika Teej Puja</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Holika Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Holika Puja</a></li>
                                </ul>
                            </Link>
                        </div>
                    </li>
                </ul>
                <ul onClick={() => { document.getElementById("dropdown-menu5").style.display === "none" ? document.getElementById("dropdown-menu5").style.display = "block" : document.getElementById("dropdown-menu5").style.display = "none" }}>
                    <li className="dropdown5 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide p-7">
                        <a>Shanti Puja</a>
                        <div className="hidden h-auto flex pt-4" id="dropdown-menu5">
                            <Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                                <ul className="block w-full shadow px-12 py-8">
                                    <li className="py-1" onClick={() => { fetchallnotes("Vastu Shanti Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vastu Shanti Puja</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Kumbh / Vishnu Vivah") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Kumbh / Vishnu Vivah</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Tulsi Vivah") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Tulsi Vivah</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Ark Vivah / Male") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Ark Vivah / Male</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Manglik Shanti") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Manglik Shanti </a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Tripad Nakshtra Dosha Shanti Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Tripad Nakshtra Dosha Shanti Puja </a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Kaal Sarp Dosh Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Kaal Sarp Dosh Puja </a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Vishti Karan Dosh Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vishti Karan Dosh Puja</a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Tula Daan") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Tula Daan </a></li>
                                    <li className="py-1" onClick={() => { fetchallnotes("Pitra Dosh Shanti Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Pitra Dosh Shanti Puja </a></li>
                                </ul>
                            </Link>
                        </div>
                    </li>
                </ul>
                <ul onClick={() => { document.getElementById("dropdown-menu6").style.display === "none" ? document.getElementById("dropdown-menu6").style.display = "block" : document.getElementById("dropdown-menu6").style.display = "none" }}>
                    <li className="dropdown6 lg:inline sm:block px-4 text-black hover:text-purple-700 cursor-pointer font-bold text-base uppercase tracking-wide p-7">
                        <a>PITRA Puja</a>
                        <div className="hidden h-auto pt-4" id="dropdown-menu6">
                            <Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">
                            <ul className="block w-full shadow px-12 py-8">
                                <li className="py-1" onClick={() => { fetchallnotes("Narayana Bali") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Narayana Bali</a></li>
                            </ul>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Ourservices
