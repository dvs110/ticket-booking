import React from 'react'
// import {BsFillTaxiFrontFill} from 'react-icons/bs'
import './Banner.css'
import bannerLogo from '../../assets/1.png'
const Banner = () => {
  return (
    <div id="home">
      <div className='flex flex-col md:space-y-0 space-y-5  md:flex-row text-black  px-12 py-0 relative '>
        {/* banner section  */}
        <div className='flex-1 mt-1'>
          <p className='mt-20 font-thin  text-6xl text-bannerText font-paraFont' style={{ marginLeft: "37%" }}>Bus <span className='text-btnColor'>Booking Site</span></p>

          {/* form div  */}

          <img src={bannerLogo} alt="" className='text-center opacity-95 ' style={{ marginTop: "1rem", height: "60%", width: "60%", marginLeft: "20%" }} />
        </div>

      </div>
    </div>
  )
}

export default Banner