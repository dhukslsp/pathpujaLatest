import React, { useContext } from 'react'
import Navbar from './Navbar'
import ContextCreat from '../Context/Contextcreat'
import Record from '../records.json'
import Mapping from '../mapping.json'
import PackageCard from '../Components/PackageCard'
function Services() {
    const mycontext = useContext(ContextCreat);
    const { pujaname, changepujaname } = mycontext;
    //copied form w3 schools
    function checkAge(age) {
        return age.name = pujaname;
    }
    var datafilter = Record.find(checkAge);
    console.log(datafilter);
    return (
        <div>
            <img src="/images/beautifyIMG/Screenshot 2022-09-19 at 17.25.22.png" alt="Beautify wifth-full" className='w-full' />
            <Navbar />
            <div className='flex flex-col h-full w-full justify-center ' style={{ "backgroundColor": "rgb(254 243 234)" }}>
                <div className='flex flex-wrap justify-center'>
                    <img src="/images/1599473318GANESH POOJA.jpg" alt="" className=' p-7 pl-20' style={{ "height": "28pc" }} />
                    <div className='flex flex-col' style={{ "width": "60%" }}>
                        <p className='font-bold text-3xl mt-5 ml-10'>{datafilter.name}</p>
                        <div className='flex pl-11 pt-9 flex-wrap text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nesciunt accusamus odit porro aliquid voluptas harum recusandae dolorem labore. Aperiam esse quam odio natus sequi dolore, quos quaerat nesciunt autem accusantium voluptatem cupiditate nemo illo. Incidunt ipsum, alias facilis eveniet obcaecati debitis magni! Quae?</div>
                        <div className='flex p-11 mr-4 flex-wrap justify-center text-black' >
                            <div style={{ "width": "50%", "minWidth": "11pc" }}>
                                <div className='text-xl font-bold'>Benifits</div>
                                <p><ul className='list-disc'>
                                    <li>{datafilter.Benifit1}</li>
                                    <li>{datafilter.Benifit2}</li>
                                    <li>{datafilter.Benifit3}</li>
                                    <li>{datafilter.Benifit4}</li>
                                </ul>
                                </p>
                            </div>
                            <div style={{ "width": "50%", "minWidth": "11pc", "marginTop": "8px" }}>
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
                    {datafilter.Regular !== "NA" ? <PackageCard package="Regular" pandits={datafilter.Regular.Pandit} prices={datafilter.Regular.Prices} subpuja={datafilter.Regular.Subpuja} hours={datafilter.Regular.hours} /> : <div></div>}
                    {datafilter.Basic !== "NA" ? <PackageCard package="Basic" pandits={datafilter.Basic.Pandit} prices={datafilter.Basic.Prices} subpuja={datafilter.Basic.Subpuja} hours={datafilter.Basic.hours} /> : <div></div>}
                    {datafilter.Standard !== "NA" ? <PackageCard package="Standard" pandits={datafilter.Standard.Pandit} prices={datafilter.Standard.Prices} subpuja={datafilter.Standard.Subpuja} hours={datafilter.Standard.hours} /> : <div></div>}
                    {datafilter.Premium !== "NA" ? <PackageCard package="Premium" pandits={datafilter.Premium.Pandit} prices={datafilter.Premium.Prices} subpuja={datafilter.Premium.Subpuja} hours={datafilter.Premium.hours} /> : <div></div>}
                </div>

            </div>
            <img src="/images/beautifyIMG/Screenshot 2022-09-19 at 17.26.23.png" alt="" />
        </div>
    )
}

export default Services