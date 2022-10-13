import React, { useContext, useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Pujano from '../Pujano.json'
import Pujac from './Pujac';

function Ourservices() {
    const [pujaty, chpuja] = useState(0);
    const [button,buttonsel] = useState();
    return (
        <div>
            <Navbar />
            <ul className="lg:pl-20 sm:pl-5 flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400" style={{"background":"#fdf3ea","border":"2px solid black "}}>
                <li className="mr-2 p-2">
                    <a href="#" id = "myid1" aria-current="page" className="inline-block lg:p-4 sm:p-1 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 text-black font-bold" onClick={() => { chpuja(0)}}>PUJA</a>
                </li>
                <li className="mr-2 p-2">
                    <a href="#" id = "myid2" className="inline-block lg:p-4 sm:p-1 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 text-black font-bold" onClick={() => { chpuja(1)}}>JAAP</a>
                </li>
                <li className="mr-2 p-2">
                    <a href="#" id = "myid3" className="inline-block lg:p-4 sm:p-1 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 text-black font-bold" onClick={() => { chpuja(2)}}>PATH/HAVAN</a>
                </li>
                <li className="mr-2 p-2">
                    <a href="#" id = "myid4" className="inline-block lg:p-4 sm:p-1 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 text-black font-bold" onClick={() => { chpuja(3)}}>FESTIVAL PUJA</a>
                </li>
                <li className="mr-2 p-2">
                    <a href="#" id = "myid5" className="inline-block lg:p-4 sm:p-1 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 text-black font-bold" onClick={() =>{chpuja(4) }}>SHANTI PUJA</a>
                </li>
                <li className="mr-2 p-2">
                    <a href="#" id = "myid6" className="inline-block lg:p-4 sm:p-1 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 text-black font-bold" onClick={()=>{chpuja(5)}}>PITRA PUJA</a>
                </li>
                
            </ul>
            <div className='servicesBg1 pt-6'>
            <p>This is a main p</p>
                <div className='p-3 hover:glass flex listclass'>
                    <div className='flex flex-wrap p-2 justify-center'>
                        {Pujano[pujaty].map((elm) => { return <Pujac Name1={elm.Name} key={elm} src={elm.imgLink != "" ? elm.imgLink : "/images/Sa2.jpg"} /> })}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Ourservices
