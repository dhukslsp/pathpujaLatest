import React, { useContext, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Pujano from '../Pujano.json'
import Pujac from './Pujac';

function Ourservices() {
    const [pujaty, chpuja] = useState(0);
    return (
        <div>
            <Navbar />
            <div className="mytabs tabs flex-nowrap lg:justify-center font-extrabold overflow-y-auto" style = {{"background":"#fdf3ea","height":"2.5pc"}}>
                <a className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:tab-active hover:text-white " onClick={() => { chpuja(0) }}>PUJA</a>
                <a className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:tab-active hover:text-white " onClick={() => { chpuja(1) }}>JAAP</a>
                <a className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:tab-active hover:text-white " onClick={() => { chpuja(2) }}>PATH/HAVAN</a>
                <a className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:tab-active hover:text-white " onClick={() => { chpuja(3) }}>FESTIVAL_PUJA</a>
                <a className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:tab-active hover:text-white " onClick={() => { chpuja(4) }}>SHANTI_PUJA</a>
                <a className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:tab-active hover:text-white " onClick={() => { chpuja(5) }}>PITRA_PUJA</a>

            </div>
            <div className='servicesBg1 pt-6'>
                <div className='p-3 hover:glass flex listclass'>
                    <div className='flex flex-wrap p-2 justify-center'>
                        {Pujano[pujaty].map((elm) => { return <Pujac Name1={elm.Name} key={elm} src={elm.imgLink !== "" ? elm.imgLink : "/images/Sa2.jpg"} /> })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Ourservices
