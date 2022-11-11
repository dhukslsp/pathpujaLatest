import React, { useContext, useEffect } from 'react'
import Navbar from '../Navbar'
import PackageCard from './PackageCard'
import Footer from '../Footer'
import ContextCreat from '../../Context/Contextcreat';
function Pujadescshow(props) {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [1])
    const mycontext = useContext(ContextCreat);
    const { imglink } = mycontext;
    return (
        <div>
            <Navbar />
            <div className='flex flex-col h-full w-full justify-center ' style={{ "backgroundColor": "rgb(254 243 234)" }}>
            <div className='flex flex-wrap lg:justify-center sm:justify-start'>
            <img src={imglink} className="h-7 block sm:pt-0 lg:pt-5" style={{ "height": "25.75rem", "width": "25pc","borderRadius":"13pc","marginTop":"67px" }} id="imagefit" alt="" />
                    <div className='flex flex-col' style={{ "width": "60%" }}>
                        <p className='puja font-bold text-3xl mt-5 text-black '>{props.name.replaceAll(" or ", "/")}</p>
                        <div className='flex pl-11 pt-9 flex-wrap text-black' id="pujadesc">{props.describe === "NA"?"":props.describe}</div>
                        <div className='benifitpro flex mt-10 mb-10 flex-wrap justify-center text-black' >
                            <div style={{ "width": "40%", "minWidth": "11pc" }}>
                                <div className='text-xl font-bold'>Key Benefits</div>
                                <p className='myp1'><ul className='list-disc'>
                                    <li>{props.Benifit1}</li>
                                    <li>{props.Benifit2}</li>
                                    <li>{props.Benifit3}</li>
                                    <li>{props.Benifit4}</li>
                                </ul>
                                </p>
                            </div>
                            <div className="divider lg:divider-horizontal" style={{ "border": "1px solid black", "width": "1px","marginRight":"35px" }}></div>
                            <div style={{ "width": "40%", "minWidth": "11pc" }}>
                                <div className='text-xl font-bold'>Our Promise</div>
                                <p className='myp2'><ul className='list-disc'>
                                    <li>Timely availability of quality services</li>
                                    <li>Cost effective prices</li>
                                    <li>Ideal code of behaviour</li>
                                    <li>Good quality Samagri For a memorable experience</li>
                                    <li>Pandits are highly qualified and experienced</li>
                                    <li>Professional team for guidance and support </li>
                                </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ "backgroundColor": "rgb(254 243 234)" }}>
                <h1 className='text-2xl font-bold text-black text-center'>Packages</h1>
                <div className="flex flex-wrap text-black mt-8 justify-center">
                    {Object.values(props.Regular)[0] !== "N" ? <PackageCard package="Regular" pandits={props.panditsR} prices={props.pricesR} subpuja={props.subpujaR} hours={props.hoursR} pujaname={props.name} /> : <div />}
                    {Object.values(props.Basic)[0] !== "N" ? <PackageCard package="Basic" pandits={props.panditsB} prices={props.pricesB} subpuja={props.subpujaB} hours={props.hoursB} pujaname={props.name} /> : <div />}
                    {Object.values(props.Standard)[0] !== "N" ? <PackageCard package="Standard" pandits={props.panditsS} prices={props.pricesS} subpuja={props.subpujaS} hours={props.hoursS} pujaname={props.name} /> : <div />}
                    {Object.values(props.Premium)[0] !== "N" ? <PackageCard package="Premium" pandits={props.panditsP} prices={props.pricesP} subpuja={props.subpujaP} hours={props.hoursP} pujaname={props.name} /> : <div />}
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Pujadescshow