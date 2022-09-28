import React, { useContext } from 'react'
import Navbar from './Navbar'
import Contextcreat from "../Context/Contextcreat"
function Detailing() {
    const fetch = useContext(Contextcreat);
    const { Packagedesc, save_CustData } = fetch;
    // adding the usestate 
    const onCLickDataSend = async () => {
        const datobj = {
            "pujaname": Packagedesc.pujaname,
            "packageName": Packagedesc.packageName,
            "subpuja": Packagedesc.subpuja,
            "hours": Packagedesc.hours,
            "pandits": Packagedesc.pandits,
            "pices": Packagedesc.pices,
            "CusfName": document.getElementById("name").value,
            "CuslName": document.getElementById("fame").value,
            "CusPhone": document.getElementById("PhoneNo").value,
            "CusGmail": document.getElementById("Gmail").value,
            "CusAdress": document.getElementById("Adress").value,
            "Cuscity": document.getElementById("City").value,
            "CusState": document.getElementById("State").value,
            "CusPinCode": document.getElementById("Pincode").value,
            "PujaEventDate": document.getElementById("Date").value,
            "PujaEventTime": document.getElementById("time").value
        }
        console.log(datobj);
        save_CustData(datobj);
    }

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
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="First Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                            </label>
                            <input className="shadow appearance-none mt-5 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fame" type="text" placeholder="Last Name" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                Phone no.
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="PhoneNo" type="tel" placeholder="Phone" pattern='[0-9]{10}' required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                G-mail
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Gmail" type="text" placeholder="example : pathpuja.com@gmail.com" />
                        </div>

                    </div>
                    <div className="mb-4 w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                            Adress
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Adress" type="text" placeholder="Street Name, Locality" />
                    </div>
                    <div className='grid  grid-cols-3 gap-4'>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                City
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="City" type="text" placeholder="City" />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                State
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="State" type="text" placeholder="State" />
                        </div>
                        <div className="mb-4 w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                                Pin Code
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Pincode" type="number" placeholder="Pin Code" />
                        </div>
                    </div>
                    <p className='inline mb-10'>Puja would be performed on which :</p>
                    <div className="mb-4 w-full mt-5">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                            Date
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="Date" type="date" placeholder="First Name" />
                    </div>
                    <div className="mb-4 w-full ">

                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlfor="username">
                            Time
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="time" type="time" placeholder="First Name" />
                    </div>
                    <label htmlFor="my-modal-6" className="btn btn-primary" onClick={onCLickDataSend}>Next</label>
                </div>
            </div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-white text-black">
                    <h3 className="font-bold text-lg text-center">Congratulations!!</h3>
                    <p className="py-4">Your filled in credentials have successfully been saved. We would like to thank you for your precious time. In order to confirm your bookings further, we request you to check your inbox as you would have received a mail from our team. The concerned mail mentions the instructions to complete your booking process further smoothly. We gladly welcome you to Pathpuja. Wishing you an amazing and an enriching puja experience.</p>
                    <p className="font-bold">Thank You!</p>
                    <p className="font-bold">Team Pathpuja</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn bg-white text-black hover:bg-black hover:text-white">Ok</label>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Detailing