import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Pujano from '../Pujano.json'
import Pujac from './Pujac';

function Ourservices() {
    useEffect(() => {
        window.scrollTo(0,0);
    }, [])
    
    const [pujaty, chpuja] = useState(0);
    return (
        <div>
            <Navbar />
            <div className="mytabs pointer-events-auto tabs flex-nowrap lg:justify-center font-extrabold overflow-y-auto sticky top-0" style={{ "background": "#fdf3ea", "height": "2.5pc","zIndex":"5" }}>
                <a id="1" className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:bg-black hover:text-white" onClick={() =>  {chpuja(0) }}>PUJA</a>
                <a id="2" className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:bg-black hover:text-white" onClick={() =>  {chpuja(1) }}>JAAP</a>
                <a id="3" className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:bg-black hover:text-white " onClick={() => {chpuja(2) }}>PATH/HAVAN</a>
                <a id="4" className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:bg-black hover:text-white " onClick={() => {chpuja(3) }}>FESTIVAL_PUJA</a>
                <a id="5" className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:bg-black hover:text-white " onClick={() => {chpuja(4) }}>SHANTI_PUJA</a>
                <a id="6" className="tab text-black sm:tab-xs lg:tab tab-lifted lg:text-black hover:bg-black hover:text-white " onClick={() => {chpuja(5) }}>PITRA_PUJA</a>
            </div>
            <div className='servicesBg1 pt-.5'>
            <div className='p-3 hover:glass flex listclass'>
                    <div className='flex flex-wrap p-1 lg:justify-center sm:justify-center' id = "services112">
                        {Pujano[pujaty].map((elm) => { return <Pujac Sub = {elm.Sub} id={elm.Name} Name1={elm.Name} src={elm.imgLink !== "" ? elm.imgLink : "/images/homeing/pathpuj12.jpg"} /> })}
                    </div>
                </div>  
            </div>
            <Footer />
        </div>
    )
}

export default Ourservices
