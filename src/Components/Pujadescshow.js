import React, { useContext } from 'react'
import Navbar from './Navbar'
import PackageCard from './PackageCard'
import Footer from './Footer'
import ContextCreat from '../Context/Contextcreat';
function Pujadescshow(props) {
    const mycontext = useContext(ContextCreat);
    const { imglink } = mycontext;
    return (
        <div>
            <img src="/images/beauti.png" alt="Beautify wifth-full" className='w-full' />
            <Navbar />
            <div className='flex flex-col h-full w-full justify-center ' style={{ "backgroundColor": "rgb(254 243 234)" }}>
            <div className='flex flex-wrap lg:justify-center sm:justify-start'>
            <img src={imglink} className="h-7 block" style={{"height":"25.75rem","width":"25pc"}} alt="" />
            <div className='flex flex-col' style={{ "width": "60%" }}>
            <p className='puja font-bold text-3xl mt-5 text-black'>{props.name}</p>
            <div className='flex pl-11 pt-9 flex-wrap text-black' id = "pujadesc">{props.describe}</div>
            <div className='benifitpro flex mt-10 mb-10 flex-wrap justify-center text-black' >
                            <div style={{ "width": "40%", "minWidth": "11pc" }}>
                                <div className='text-xl font-bold'>Benifits</div>
                                <p><ul className='list-disc'>
                                    <li>{props.Benifit1}</li>
                                    <li>{props.Benifit2}</li>
                                    <li>{props.Benifit3}</li>
                                    <li>{props.Benifit4}</li>
                                </ul>
                                </p>
                            </div>
                            <div className="divider lg:divider-horizontal"></div>
                            <div style={{ "width": "40%", "minWidth": "11pc", "marginTop": "8px" }}>
                                <div className='text-xl font-bold'>Our Promice</div>
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
                    {Object.values(props.Basic)[0] !== "N" ? <PackageCard package="Basic" pandits={props.panditsB} prices={props.pricesB} subpuja={props.subpujaB} hours={props.hoursB} pujaname={props.name} /> : <div />}
                    {Object.values(props.Regular)[0] !== "N" ? <PackageCard package="Regular" pandits={props.panditsR} prices={props.pricesR} subpuja={props.subpujaR} hours={props.hoursR} pujaname={props.name} /> : <div />}
                    {Object.values(props.Premium)[0] !== "N" ? <PackageCard package="Premium" pandits={props.panditsP} prices={props.pricesP} subpuja={props.subpujaP} hours={props.hoursP} pujaname={props.name} /> : <div />}
                    {Object.values(props.Standard)[0] !== "N" ? <PackageCard package="Standard" pandits={props.panditsS} prices={props.pricesS} subpuja={props.subpujaS} hours={props.hoursS} pujaname={props.name} /> : <div />}
                </div>

            </div>
            <img src="/images/S21.png" alt="" />
            <Footer />
        </div>
    )
}

export default Pujadescshow