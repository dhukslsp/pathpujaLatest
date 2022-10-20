import React, { useState, useContext } from 'react'
import ContextCreat from '../Context/Contextcreat';
import { Link } from 'react-router-dom'
import Pujasea from '../Pujasearch.json'
import Footer from './Footer'
function HomePage() {
    const [myst1, newstate] = useState("");
    const [filtered, changefiltered] = useState([]);
    const mycontext = useContext(ContextCreat);
    const { changeimg, fetchallnotes } = mycontext;
    const pujaChange = (first, imgLink) => {
        changeimg(imgLink);
        fetchallnotes(first);
    }
    const filterItem1 = () => {
        changefiltered(Pujasea.filter(search => search.Name.includes(myst1)));
    }
    const handlechange = (e) => {
        if (e.target.value.length > 0) {
            document.getElementById("desc112").style.display = "block";
        }
        else {
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
                        
                        <Link to="/" id="pathpujaHomeLogo"><img src="/images/pathpujaLogoBackrem.png" alt="" style={{ "height": "4.5rem", "marginLeft": "2.4pc","marginTop":"11px" }} /></Link>
                        <div className='p-10'>
                            <img src="/images/A3.png" alt="there is always room for pathpuja" className="p-0 ml-auto mr-auto mb-10" style={{ "height": "12pc", "marginTop": "16px" }} />
                                <img src="/images/A4.png" id = "content1" alt="Sub Nav" className="p-0" />
                                <div className='text-center font-extrabold text-2xl' id = "content2">Celeberting Puja Begins At Home</div>
                        </div>
                        <div className='w-full flex justify-center flex-wrap divElements'>
                            <div className="dropdown">
                                <div className='sm:flex-wrap lg:flex text-center'>
                                    <div className='grid grid-cols-1 w-30' >
                                        <div>
                                            <form className='mt-9 w-full'>
                                                <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                                                <div className="relative">
                                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                                    </div>
                                                    <input autoComplete='off' type="text" onChange={handlechange} id="myinp1" list="input" className="block p-4 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Puja, Path, Havan & etc." required="" />
                                                </div>
                                            </form>
                                            <div id="desc112" className='overflow-y-auto overflow-x-hidden' style={{ "width": "20pc", "height": "12pc" }}>
                                                {filtered.map((elm) => { return <p className='bg-white w-80 rounded-full text-black' onClick={() => { pujaChange(elm.Name, elm.imgLink) }}><Link to="/AboutService">{elm.Name}</Link></p> })}
                                            </div>
                                        </div>
                                    </div>
                                    <button className='p-4 mb-6 lg:ml-10 mr-auto mt-8 rounded-full text-white font-bold h-14' style={{ "background": "#ba4b2f" }}><Link to="/Services">View Services</Link></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  style={{ "backgroundColor": "#efa593" }}>
                        <div>
                            <img src="/images/MyNewLogo.png" alt="ganesh Ji Image" className="p-0" id="mysecondLogoForpathpuja" />
                            <div className="navbar bg-base-100 font-extrabold sm:mt-0 lg:mt-5 overflow-y-auto" style={{ "backgroundColor": "#efa593" }}>

                                <div className="flex-1">
                                </div>
                                <div className="flex-none ">
                                    <ul className="menu menu-horizontal p-0 font-extrabold text-xl text-black">
                                        <li><Link className='pt-0  pb-0' to="/">Home</Link></li>
                                        <li><Link className='pt-0  pb-0' to="/Services">Services</Link></li>
                                        <li><Link className='pt-0  pb-0' to="/About">About Us</Link></li>
                                        <li><a className='mt-auto pt-0 pb-0 mb-2' href="https://wa.me/message/FQEMMDOIGPGPJ1" target="_blank"><img className='p-2' src="/images/WhatsApp.png" alt="" style={{ "height": "3pc", "paddingTop": "11px" }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <img src="/images/A1.png" alt="ganesh Ji Image" className="p-20 pb-8 pt-2" />
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
                    <p className='text-center pt-7 font-extrabold' style={{ "color": "#ba4b2f", "fontSize": "48px", }}>Features</p>
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
                            <p className='mt-7 text-xl font-extrabold text-center'>100% Assistance <br /> and Support</p>
                        </div>
                        <div className='h-full p-10 ml-auto mr-auto flex justify-center flex-col'>
                            <img src="/images/homeing/Sc5.png" alt="" style={{ "height": "5pc", "alignSelf": "center" }} />
                            <p className='mt-7 text-xl font-extrabold'>Experienced Pandits</p>
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
