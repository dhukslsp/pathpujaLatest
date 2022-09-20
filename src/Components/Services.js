import React from 'react'
import Navbar from './Navbar'
function Services() {
    return (
        <div>
        <img src="/images/beautifyIMG/Screenshot 2022-09-19 at 17.25.22.png" alt="Beautify wifth-full" className='w-full' />
            <Navbar />
            <div className='flex flex-col h-full w-full justify-center ' style={{ "backgroundColor": "rgb(254 243 234)" }}>
                <div className='flex flex-wrap justify-center'>
                    <img src="/images/1599473318GANESH POOJA.jpg" alt="" className=' p-7 pl-20' style={{ "height": "28pc" }} />
                    <div className='flex flex-col' style={{"width":"60%"}}>
                        <h1 className='text-center text-2xl font-bold text-black'>Description</h1>
                        <div className='flex p-11 flex-wrap justify-center text-black' >
                            <div style={{"width":"50%","minWidth":"11pc"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus earum totam esse, amet iure blanditiis impedit recusandae praesentium perferendis velit delectus ipsa magnam, consectetur corrupti. Voluptas accusamus alias deleniti molestiae dolores placeat!</div>
                            <div style={{"width":"50%","minWidth":"11pc"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod beatae maxime incidunt vel adipisci ipsum pariatur, qui dolor eos doloribus corporis architecto sapiente voluptate rem labore recusandae laudantium corrupti quam natus dolorem!</div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ "backgroundColor": "rgb(254 243 234)" }}>
                <h1 className='text-center text-2xl font-bold text-black'>Packages</h1>
                <div className="flex justify-center flex-wrap text-black">
                    <div className="card w-60 bg-base-100 shadow-xl m-12">
                        <div className="card-body bg-white">
                            <h2 className="card-title">Regular</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div><div className="card w-60 bg-base-100 shadow-xl m-12">
                        <div className="card-body bg-white">
                            <h2 className="card-title">Basic</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div><div className="card w-60 bg-base-100 shadow-xl m-12">
                        <div className="card-body bg-white">
                            <h2 className="card-title">Standard</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div><div className="card w-60 bg-base-100 shadow-xl m-12">
                        <div className="card-body bg-white">
                            <h2 className="card-title">Prenium</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <img src="/images/beautifyIMG/Screenshot 2022-09-19 at 17.26.23.png" alt="" />
        </div>
    )
}

export default Services