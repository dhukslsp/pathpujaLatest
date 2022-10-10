import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import ContextCreat from '../Context/Contextcreat.js';
function HomePage() {
    const mycontext = useContext(ContextCreat);
    const { fetchallnotes } = mycontext;
    const onsearch = () => {
        const searchdata = document.getElementById("myinp1").value
        fetchallnotes(searchdata);
    }
    return (
        <div>
            <div className='bg-white text-black'>
                <div className='homequery h-auto flex flex-row'>
                    <div style={{ "backgroundColor": "#fcf5eb", "height": "auto" }} >
                        <img src="/images/A2.png" alt="ganesh Ji Image" className="p-0" />
                        <div className='p-10'>
                            <img src="/images/A3.png" alt="there is always room for pathpuja" className="p-0 ml-auto mr-auto mb-10" style={{ "height": "12pc", "marginTop": "16px" }} />
                            <img src="/images/A4.png" alt="Sub Nav" className="p-0" />
                        </div>
                        <div className='w-full flex justify-center flex-wrap divElements'>
                            <input type="text" id="myinp1" list="input" className='ml-auto lg:mr-2 p-4 mt-8 sm:mr-auto ' style={{ "border": "3px solid #ba4b2f", "color": "#ba4b2f", "backgroundColor": "rgb(252 245 235)", "width": "22pc" }} placeholder="Enter Puja Hawan Etc" />
                            <button className='p-4 lg:ml-10 mr-auto mt-8' id="homeBut" style={{ "border": "3px solid #ba4b2f", "color": "#ba4b2f", "backgroundColor": "rgb(252 245 235)", "fontSize": "21px" }} ><Link onClick={onsearch} to="/AboutService">Search</Link></button>
                            <button className='p-4 lg:ml-10 mr-auto mt-8' id="homeBut" style={{ "border": "3px solid #ba4b2f", "color": "#ba4b2f", "backgroundColor": "rgb(252 245 235)", "fontSize": "21px" }}><Link to="/Services">View Services</Link></button>
                            </div>
                            <datalist id="input">
                                <option className="py-1" >Rudrabhishek Puja</option>
                                <option className="py-1" >Satyanarayana Puja</option>
                                <option className="py-1" >Aayusha Homa</option>
                                <option className="py-1" >Navgraha Homa</option>
                                <option className="py-1" >Gandmool Nakshatra Puja</option>
                                <option className="py-1" >Ganesh Puja</option>
                                <option className="py-1" >Annaprashan Puja</option>
                                <option className="py-1" >Namkaran Puja</option>
                                <option className="py-1" >Annaprashan Puja</option>
                                <option className="py-1" >Bhoomi Pujan</option>
                                <option className="py-1" >Griha Pravesh</option>
                                <option className="py-1">Vivah</option>
                                <option className="py-1" >Roka Ceremony</option>
                                <button className='p-4 lg:ml-10 mr-auto mt-8' id="homeBut" style={{ "border": "3px solid #ba4b2f", "color": "#ba4b2f", "backgroundColor": "rgb(252 245 235)", "fontSize": "21px" }}><Link to="/Services">View Services</Link></button>
                                <option className="py-1" onClick={() => { fetchallnotes("Graha Shanti Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Graha Shanti Puja </a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Kuber Upasana / Laxmi Kuber homa") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Kuber Upasana / Laxmi Kuber homa</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Maha Lakshmi Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Maha Laxmi puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Office Opening Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Office Opening Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Saraswati Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Saraswati Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Shuddhi Karan  Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Shuddhi Karan  Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Vishvakarma Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vishvakarma Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Janeyu Sanskar (Upnayan)") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Janeyu Sanskar (Upnayan)</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Maha Shivratri Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Maha Shivratri Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Vechile Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vechile Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Karwa Chauth") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Karwa Chauth</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Vidhya Arambham") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Vidhya Arambham</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Gauri Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Gauri Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Punsavan Sanskar") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Punsavan Sanskar</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Ekadashi Vrat Udayapan Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Ekadashi Vrat Udayapan Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Griha Pravesh") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Sai Sandhya</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Chatti Pujaan") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Chatti Pujaan</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Daseva-Teravhin Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Daseva-Teravhin Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Lalitha Sasharnam Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Lalitha Sasharnam Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Solah Sombar Udapanan Puja") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Solah Sombar Udapanan Puja</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Dhanvantri Homam") }}><Link to="/AboutService" className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer"><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Dhanvantri Homam</a></Link></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Graha Shanti Jaap") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Graha Shanti Jaap</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Gyatri Mantra") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Gyatri mantra Jaap</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Mahamrityunjaya Jaap") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Mahamrityunjaya Jaap</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Santan Gopal Mantra Jaap") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Santan Gopal Mantra Jaap</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Maha Ganpati Homa") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Maha Ganpati homa </a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Durga Saptshati/Parayana/Chandi Homa/Durga Homa") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Durga Saptshati/Parayana/Chandi Homa/Durga Homa</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Lakshmi Narsimha Homa") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Lakshmi Narsimha Homa</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Akhand Ramayana Paath") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Akhand Ramayana Paath</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Sunderkand Paath") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Sunderkand Paath </a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Garud Puran Paath") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Garud Puran Paath </a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Hanuman Chalisa") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Hanuman Chalisa</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Navratri Kalash Sthapna") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Navratri Kalash Sthapna</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Dhanteras Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Dhanteras Puja</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Diwali Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Diwali Puja</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Dussera Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Dussera Puja</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Hartalika Teej Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Hartalika Teej Puja</a></option>
                                <option className="py-1" onClick={() => { fetchallnotes("Holika Puja") }}><a className="block text-black font-bold text-base uppercase hover:text-purple-700 cursor-pointer">Holika Puja</a></option>
                            </datalist>
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
                                        <li><a className='mt-auto mb-2' href="https://wa.me/message/FQEMMDOIGPGPJ1" target="_blank"><img className='p-2' src="/images/WhatsApp.png" alt="" style={{ "height": "3pc", "paddingTop": "11px" }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img src="/images/A1.png" alt="ganesh Ji Image" className="p-20 pt-5" />
                    </div>
                </div>
                <div style={{ "background": "#efa593", "border-top": "6px solid black;", "width": "full" }} className = "myservice">
                    <p className='text-center pt-7 font-extrabold' style={{ "color": "#ba4b2f", "fontSize": "48px", }}>Services</p>
                    <div className='flex flex-row justify-center flex-wrap'>
                        <div className='h-full p-10'>
                            <img src="/images/S.png" alt="" style={{ "height": "20pc" }} />
                        </div>
                        <div className='h-full p-10'>
                            <img src="/images/Sa.png" alt="" style={{ "height": "20pc" }} />
                        </div>
                        <div className='h-full p-10'>
                            <img src="Sb.png" alt="" style={{ "height": "20pc" }} />
                        </div>
                    </div>
                </div>
                <div style={{ "background": "#fcf5eb", "border-top": "6px solid black;", "width": "full"}} className="newcolor">
                    <p className='text-center pt-7 font-extrabold' style={{ "color": "#ba4b2f", "fontSize": "48px", }}>Services</p>
                    <div className='flex justify-center flex-wrap'>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc1.png" alt="" style={{ "height": "5pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Easy Booking</p>
                        </div>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc2.png" alt="" style={{ "height": "5pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Modest Pricing</p>
                        </div>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc3.png" alt="" style={{ "height": "5pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Professional Team</p>
                        </div>
                    </div>
                    <div className='flex justify-center flex-wrap'>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc4.png" alt="" style={{ "height": "5pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Full Guidance <br /> and Support</p>
                        </div>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc5.png" alt="" style={{ "height": "5pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Experienced priest</p>
                        </div>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc6.png" alt="" style={{ "height": "5pc", "alignSelf": "center" }} />
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
