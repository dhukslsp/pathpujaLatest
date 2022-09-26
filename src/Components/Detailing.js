import React from 'react'
import Navbar from './Navbar'
function Detailing() {
    return (
        <div style={{ "background": "#fef3ea" }}>
            <Navbar />

            <div className='descripandDet flex flex-col justify-center m-10'>
                <p className='font-bold text-center'>Please Enter your correct details don't make mistake in entering phone no and Email</p>
                <div>
                    <div className="form-control pl-10">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <label className="input-group" style={{ "minWidth": "16pc", "height": "5pc", "height": "68px"}}>
                            <span>Name</span>
                            <input type="text" placeholder="Name" className="input input-bordered" style={{ "height": "67px","width":"100%" }} />
                        </label>
                    </div>
                    <div className="form-control pl-10">
                        <label className="label">
                            <span className="label-text">Please Enter your Phone Registered in WhatsApp</span>
                        </label>
                        <label className="input-group" style={{ "minWidth": "16pc", "height": "5pc", "height": "68px"}}>
                            <span>Phone</span>
                            <input type="text" placeholder="Enter Your Phone No" className="input input-bordered" style={{ "height": "67px","width":"100%" }} />
                        </label>
                    </div>
                    <div className="form-control pl-10">
                        <label className="label">
                            <span className="label-text">Enter your Correct Email</span>
                        </label>
                        <label className="input-group" style={{ "minWidth": "16pc", "height": "5pc","width":"100%"}}>
                            <span>Email</span>
                            <input type="email" placeholder="info@site.com" className="input input-bordered" style={{ "height": "67px" }} />
                        </label>
                    </div>
                    <div className="form-control pl-10">
                        <label className="label">
                            <span className="label-text">Your Adress</span>
                        </label>
                        <label className="input-group" style={{ "minWidth": "16pc", "height": "5pc", "height": "68px" ,"width":"100%"}}>
                            <span>Adress</span>
                            <input type="text" placeholder="Your Adress" className="input input-bordered input-lg w-full max-w-xs" />
                        </label>
                    </div>
                    <div className='pl-10 pt-6 font-extrabold'>It's Time to select time</div>
                    <div className="form-control pl-10">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <label className="input-group" style={{ "minWidth": "16pc", "height": "5pc", "height": "68px" }}>
                            <span>Select Date</span>
                            <input type="date" placeholder="Select Date" className="input input-bordered input-lg w-full max-w-xs" />
                        </label>
                    </div>
                    <div className="form-control pl-10">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        <label className="input-group" style={{ "minWidth": "16pc", "height": "5pc", "height": "68px" }}>
                            <span>Select time</span>
                            <input type="time" placeholder="Select Date" className="input input-bordered input-lg w-full max-w-xs" />
                        </label>
                        <button className="btn btn-success mtx-10 ml-10 mb-10 mt-10" style={{ "width": "20pc" }}>Click For Getting Payment Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detailing