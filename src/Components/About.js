import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
function About() {
  return (
    <div>
      <Navbar />
      <div style = {{"backgroundColor":"#fef3ea"}}>
        <p className='font-extrabold text-3xl pt-6 text-center text-black'>ABOUT US</p>
        <div className='flex flex-wrap-reverse'>
          <div className='media1 m-12 text-black' style={{ "box-shadow": "12px 12px 2px 1px silver", "width": "56pc", "marginTop": "33px" }}>
            <p className='pb-1'>
              Pathpuja has been started with an intention to bring back the long forgotten traditions of performing pujas before starting anything auspicious. To help people make realize again that blessings of the god are as important as creating a great and a successful career in life.</p>
            <p className='pb-1'>
              Since the world has been moving in a fast pace people have lost touch to doing puja which is a way of connecting to the inner self or the divine forces in the world. Mostly people have indulged themselves into their own corporate or professional life.</p> <p className='pb-1'> Therefore, Pathpuja brings you a variety of puja services that to with easy steps and less time taking booking process. Whats more is that this website provides you a whole lot variety of pujas for all occasions and important events happening at your homes.
                All the puja services are available for the NCR region. A deeper dive into the website we have services of providing you experienced and highly qualified pandit ji’s with minimum time span. Instant bookings are also made possible here. </p> <p className='pb-1'>Looking for creating memorable puja experience for you and your loved ones.</p></div>
          <img src="/images/Pathpuja.png" alt="" style={{ "height": "20pc" }} className="mr-auto ml-auto" />
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default About