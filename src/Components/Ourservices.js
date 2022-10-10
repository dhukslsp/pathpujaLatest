import React, { useContext,useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Pujano from '../Pujano.json'
import Pujac from './Pujac';

function Ourservices() {
    return (
        <div>
            <Navbar />
            <div className='servicesBg1 pt-6'>
                <div className='p-1  sm:w-7 lg:w-12 mb-10 sm:ml-0 flex ml-auto lg:ml-7 mr-auto select-none'>
                    <div className='font-extrabold text-left text-black h-10 cursor-pointer sm:p-5 lg:p-5 ml-2'><p className='lg:h-8 sm:h-0'>Puja</p></div>
                    <div className='font-extrabold text-left text-black h-10 cursor-pointer sm:p-5 lg:p-5 ml-2'><p>Jaap</p></div>
                    <div className='font-extrabold text-left text-black h-10 cursor-pointer sm:p-5 lg:p-5  ml-2'><p>Path/Havan</p></div>
                    <div className='font-extrabold text-left text-black h-10 cursor-pointer sm:p-5 lg:p-5 ml-2'><p>Festival Puja</p></div>
                    <div className='font-extrabold text-left text-black h-10 cursor-pointer sm:p-5 lg:p-5'><p>Shanti Puja</p></div>
                    <div className='font-extrabold text-left text-black h-10 cursor-pointer sm:p-5 lg:p-5'><p>Pitra Puja</p></div>
                </div>
                <div className='p-3 hover:glass flex listclass'>
                    <div className='flex flex-wrap p-2 justify-center'>
                        {Pujano[0].Puja.map((elm)=>{return <Pujac  Name1={elm} key = {elm}/>})}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Ourservices
