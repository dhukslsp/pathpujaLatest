import React from 'react'   
function HomePage() {
    return (
        <div className="background">
            <div className='block list-none h-24'>
            <li className='flex float-right  m-4 inline-block'><img src="/images/WhatsApp.png" alt="" srcSet="" className='h-8 align-middle hover:cursor-pointer' style={{"marginTop":"14px"}}/></li>
            <li className='float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-white hover:bg-white hover:text-black hover:cursor-pointer inline-block'>About Us</li>
            <li className='float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-white hover:bg-white hover:text-black hover:cursor-pointer inline-block'>Services</li>
            <li className='float-right  m-4 duration-700 align-text-bottom font-bold rounded-lg p-5 text-white hover:bg-white hover:text-black hover:cursor-pointer inline-block'>Home</li>
            </div>
            <div className='block h-12'>
                <img src="./images/Pathpujalogo.png" className='h-26 w-90 ml-auto mr-auto rounded-7xl'/>
                <div className='text-white text-center text-4xl mt-6'> There is always room for <p className='mt-4'>PATHPUJA</p> </div>
                <div className='text-white text-center text-xl mt-4'> Line to be next </div>
            </div>
        </div>
    )
}

export default HomePage