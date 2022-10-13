import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function About() {
  return (
    <div>
      <Navbar />
      <div id="aboutcontainer1121" className='flex flex-wrap lg:justify-start sm:justify-center text-white' style={{ "backgroundColor": "#bd4b2f", "paddingTop": "4pc" }}>
        <img src="/images/pathpuj12.jpg" alt="" id="logoimg" style={{ "borderRadius": "100pc", "height": "24pc", "marginTop": "7pc" }} />
        <p className='w-1/2 sm:ml-0 sm:mr-9 md:ml-auto md:mr-auto lg:ml-auto lg:mr-auto '><div className='media1 m-12 text-black'>

          <div className='flex justify-center flex-col'>
            <p className='font-extrabold text-4xl mb-6  text-white mt-16 lg:text-left sm:text-center'>About Us</p>
            <p className='pb-1 text-white font-bold lg:text-left sm:text-center'>
              Pathpuja has been started with an intention to bring back the long forgotten traditions of performing pujas before starting anything auspicious. To help people make realize again that blessings of the god are as important as creating a great and a successful career in life.</p>
            <p className='pb-1 text-white font-bold lg:text-left sm:text-center'>
              Since the world has been moving in a fast pace people have lost touch to doing puja which is a way of connecting to the inner self or the divine forces in the world. Mostly people have indulged themselves into their own corporate or professional life.</p>
            <p className='pb-1 text-white font-bold lg:text-left sm:text-center'> Therefore, Pathpuja brings you a
              variety of puja services that to with easy steps and less time taking booking process. Whats more is that this website provides you a whole lot variety of pujas for all occasions and important events happening at your homes.
              All the puja services are available for the NCR region. A deeper dive into the website we have services of providing you experienced and highly qualified pandit ji’s with minimum time span. Instant bookings are also made possible here. </p>
            <p className='pb-1 text-white font-bold lg:text-left sm:text-center'>Looking for creating memorable
              puja experience for you and your loved ones.</p>
          </div>
        </div></p>
      </div>
      <Footer />
    </div>
  )
}

export default About