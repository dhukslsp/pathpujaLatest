import { React, useEffect } from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Pujac2 from '../Pujac2'
function SubpujaElm() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [1])
  return (
    <div>
      <Navbar />
      <div className='pt-10 pl-10 text-black text-2xl' style={{ "backgroundColor": "#fef3ea" }}>
        <p className='font-extrabold'>
          Graha Shanti Puja
        </p>
        </div>
        <div className='flex flex-wrap p-1 pl-4 justify-start' style={{ "backgroundColor": "#fef3ea" }}>
          <Pujac2 Name1="Budha Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac2 Name1="Chandra Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac2 Name1="Guru Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac2 Name1="Ketu Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac2 Name1="Mangal Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac2 Name1="Rahu Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac2 Name1="Shani Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac2 Name1="Shukra Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac2 Name1="Surya Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />

        </div>
      <Footer />
    </div>
  )
}

export default SubpujaElm