import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Pujano from '../Pujano.json'
import Pujac from './Pujac';

function Ourservices() {
    const [pujaty, chpuja] = useState(0);

    return (
        <div>
            <Navbar />
            <div className='servicesBg1 pt-6'>
                <ul class="nav nav-tab flex sm:pl-7 lg:pl-10  font-extrabold flex-wrap cursor-pointer text-black">
                    <li id="allbtn" className='pl-0'><a onClick={()=>{chpuja(0)}}>PUJA</a></li>
                    <li id="dubbtn" className='pl-0'><a onClick={()=>{chpuja(1)}}>JAAP</a></li>
                    <li id="recentbtn" className='pl-0'><a onClick={()=>{chpuja(2)}}>PATH/HAVAN</a></li>
                    <li id="followedbtn" className='pl-0'><a onClick={()=>{chpuja(3)}}>FESTIVL PUJA</a></li>
                    <li id="popularbtn" className='pl-0'><a onClick={()=>{chpuja(4)}}>SHANTI PUJA</a></li>
                    <li id="moviebtn" className='pl-0'><a onClick={()=>{chpuja(5)}}>PITRA PUJA</a></li>
                </ul>
                <div className='p-3 hover:glass flex listclass'>
                    <div className='flex flex-wrap p-2 justify-center'>
                        {Pujano[pujaty].map((elm) => { return <Pujac Name1={elm.Name} key={elm} /> })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Ourservices
