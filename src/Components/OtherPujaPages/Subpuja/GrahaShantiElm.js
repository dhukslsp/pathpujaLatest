import { React, useEffect } from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import Pujac from '../../Pujac'
function SubpujaElm() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [1])
  return (
    <div>
      <Navbar />
      <div className='pt-10 pl-10 text-black text-2xl' style={{ "backgroundColor": "#fef3ea" }}>
        <p className='font-extrabold text-center pb-5'>
          Graha Shanti Puja
        </p>
        </div>
        <div className='flex flex-wrap p-1 pl-4 justify-center' style={{ "backgroundColor": "#fef3ea" }}>
          <Pujac Name1="Budha Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac Name1="Chandra Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac Name1="Guru Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac Name1="Ketu Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac Name1="Mangal Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac Name1="Rahu Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac Name1="Shani Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac Name1="Shukra Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />
          <Pujac Name1="Surya Graha Shanti Puja" src = "/images/pathpuj12.jpg"  />

        </div>
      <Footer />
    </div>
  )
}

export default SubpujaElm