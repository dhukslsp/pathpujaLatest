import React, { useState,useContext } from 'react'
import ContextCreat from '../Context/Contextcreat';
import { Link } from 'react-router-dom'
import Pujasea from '../Pujasearch.json'
import Footer from './Footer'
function HomePage() {
    const [myst1, newstate] = useState("");
    const [ans, changeans] = useState();
    const [filtered,changefiltered] = useState([]);
    const mycontext = useContext(ContextCreat);
    const { fetchallnotes } = mycontext;
    const pujaChange = (first) => {
        fetchallnotes(first);
    }
    const filterItem1 = () =>{
        changefiltered(Pujasea.filter(search => search.Name.includes(myst1)));
    }
    const handlechange = (e) => {
        if (e.target.value.length>0){
            document.getElementById("desc112").style.display = "block";
        }
        else{
            document.getElementById("desc112").style.display = "none";
        }
        e.preventDefault();
        newstate(e.target.value);
        filterItem1();
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
                            <div className="dropdown">
                                <div className='sm:flex-wrap lg:flex text-center'>
                                    <div className='grid grid-cols-2' style={{ "width": "22pc" }}>
                                        <div>
                                            <input autoComplete='off' type="text" onChange={handlechange} id="myinp1" list="input" className='ml-auto lg:mr-2 p-4 mt-8 sm:mr-auto ' style={{ "border": "3px solid #ba4b2f", "color": "#ba4b2f", "backgroundColor": "rgb(252 245 235)", "width": "22pc" }} placeholder="Enter Puja Hawan Etc" />
                                            <div id = "desc112" className='overflow-y-auto overflow-x-hidden' style={{ "width": "20pc", "height": "12pc" }}>
                                                {filtered.map((elm)=>{return <p className='bg-white w-80 text-black' onClick = {()=>{pujaChange(elm.Name)}}><Link to = "/AboutService">{elm.Name}</Link></p>})}
                                            </div>
                                        </div>
                                    </div>
                                    <button className='p-4 lg:ml-10 mr-auto mt-8' id="homeBut" style={{ "border": "3px solid #ba4b2f", "color": "#ba4b2f", "backgroundColor": "rgb(252 245 235)", "marginBottom": "1pc", "fontSize": "18px" }}><Link to="/Services">View Services</Link></button></div>
                            </div>
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
                                        <li><a className='mt-auto mb-2' href="https://wa.me/message/FQEMMDOIGPGPJ1" target="_blank"><img className='p-2' src="/images/WhatsApp.png" alt="" style={{ "height": "3pc", "paddingTop": "11px" }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img src="/images/A1.png" alt="ganesh Ji Image" className="p-20 pt-5" />
                    </div>
                </div>
                <div style={{ "background": "#efa593", "border-top": "6px solid black;", "width": "full" }} className="myservice">
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
                <div style={{ "background": "#fcf5eb", "border-top": "6px solid black;", "width": "full" }} className="newcolor">
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
