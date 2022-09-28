import React, { useContext,useState } from 'react'
import Navbar from './Navbar'
import Contextcreat from "../Context/Contextcreat"
function Detailing() {
    const fetch = useContext(Contextcreat);
    const { Packagedesc } = fetch;
    // adding the usestate 

    return (
        <div className='bg-white'>
            <Navbar />
            <div className='text-black flex flex-col lg:ml-40 lg:mr-40 pl-4 pr-4 sm:ml-1 sm:mr-1'>
            <p className='text-4xl font-extrabold mt-2'>{Packagedesc.pujaname}</p>
                <div className=''>
                    <ul className='list-disc'>
                    <li className='m-2 font-bold ml-4'><u>{Packagedesc.packageName}</u></li>
                    <li className='m-2 ml-4'><u>{Packagedesc.subpuja}</u></li>
                    <li className='m-2 ml-4'>Time - {Packagedesc.hours}</li>
                    <li className='m-2 ml-4'>Pandit's - {Packagedesc.pandits}</li>
                    <li className='m-2 ml-4'>Amount - ₹{Packagedesc.pices}</li>
                    </ul>
                </div>
                <p className='ml-2 mt-2 mb-8 text-bold'>
                    FIll out the Form to Proceed further
                </p>
                <div className='ml-auto mr-auto'>
                    <div className='ml-auto mr-auto grid gap-4 grid-cols-2'>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                Name
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="First Name"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                            </label>
                            <input  className="shadow appearance-none mt-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Last Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                Phone no.
                            </label>
                            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="tel" placeholder="Phone" pattern='[0-9]{10}' required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                G-mail
                            </label>
                            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="example : pathpuja.com@gmail.com" />
                        </div>

                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                            Adress
                        </label>
                        <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Street Name, Locality" />
                    </div>
                    <div className='grid  grid-cols-3 gap-4'>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                City
                            </label>
                            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="City" />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                State
                            </label>
                            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="State" />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                Pin Code
                            </label>
                            <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="number" placeholder="Pin Code" />
                        </div>
                    </div>
                    <p className='inline mb-10'>Puja would be performed on which :</p>
                    <div className="mb-4 w-full mt-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                            Date
                        </label>
                        <input  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="date" placeholder="First Name" />
                    </div>
                    <div className="mb-4 w-full ">

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                            Time
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="time" placeholder="First Name" />
                    </div>
                    <button className="btn btn-primary">Next</button>
                </div>
            </div>
        </div>
    )}
export default Detailing