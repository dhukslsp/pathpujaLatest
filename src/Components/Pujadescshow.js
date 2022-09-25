import React from 'react'
import Navbar from './Navbar'
import PackageCard from './PackageCard'
function Pujadescshow(props) {
    return (
        <div>
            <img src="/images/beautifyIMG/Screenshot 2022-09-19 at 17.25.22.png" alt="Beautify wifth-full" className='w-full' />
            <Navbar />
            <div className='flex flex-col h-full w-full justify-center ' style={{ "backgroundColor": "rgb(254 243 234)" }}>
                <div className='flex flex-wrap justify-center'>
                    <img src="/images/1599473318GANESH POOJA.jpg" alt="" className=' p-7 pl-20' style={{ "height": "28pc" }} />
                    <div className='flex flex-col' style={{ "width": "60%" }}>
                        <p className='font-bold text-3xl mt-5 ml-10 text-black'>{props.name}</p>
                        <div className='flex pl-11 pt-9 flex-wrap text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae laborum ea dolores assumenda, dicta porro nobis neque ipsum fugit, blanditiis veritatis.</div>
                        <div className='flex p-11 flex-wrap justify-center text-black' >
                            <div style={{ "width": "40%", "minWidth": "11pc","marginRight":"20px" }}>
                                <div className='text-xl font-bold'>Benifits</div>
                                <p><ul className='list-disc'>
                                    <li>{props.Benifit1}</li>
                                    <li>{props.Benifit2}</li>
                                    <li>{props.Benifit3}</li>
                                    <li>{props.Benifit4}</li>
                                </ul>
                                </p>
                            </div>
                            <div style={{ "width": "40%", "minWidth": "11pc", "marginTop": "8px" }}>
                                <div className='text-xl ml-4 font-bold'>Our Promice</div>
                                <p><ul className='list-disc'>
                                    <li>Timely availability of quality services</li>
                                    <li>Cost effective prices</li>
                                    <li>Ideal code of behaviour</li>
                                    <li>Good quality Samagri For a memorable experience</li>
                                    <li>Pandits are highly qualifies and experienced</li>
                                    <li>Professional team for guidence and support </li>
                                </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ "backgroundColor": "rgb(254 243 234)" }}>
                <h1 className='text-center text-2xl font-bold text-black'>Packages</h1>
                <div className="flex justify-center flex-wrap text-black">
                    {props.Basic!=="NA"?<PackageCard package = "Basic" pandits = {props.panditsB} prices = {props.pricesB} subpuja = {props.subpujaB} hours = {props.hoursB}/>:<div/>}
                </div>

            </div>
            <img src="/images/beautifyIMG/Screenshot 2022-09-19 at 17.26.23.png" alt="" />
        </div>
    )
}

export default Pujadescshow