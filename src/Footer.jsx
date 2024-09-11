import React from 'react'
import catlogo from './image/catlog.png'

const Footer = () => {
  return (
    <div className='container-fluid'>
      <div className=' row  bg-black ' style={{ paddingTop: '50px' }}>

        <div className="col-4 ">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img className='text-color' style={{ width: '120px', paddingLeft: '20px' }} src={catlogo} alt="" />
            <span className='text-white fw-bold fs-3' style={{ paddingLeft: '10px' }}>CATSY</span>
          </div>
          <p className='text-white' style={{ paddingLeft: '80px', paddingBottom: '50px' }}>Discover the latest in cinema with Movie Magic Studio. From in-depth reviews and genre explorations to upcoming releases and more, we’re your go-to source for all things film. </p>
        </div>
        <div className="col-2"  style={{ paddingTop: '40px' }}>
        <h4 className='text-white mb-4'>Explore</h4>
          <p className='text-white mb-2'>Latest Movies</p>
         <p className='text-white mb-2'>Top Rated</p>
          <p className='text-white mb-2'> New Releases</p>
        

        </div>
        <div className="col-3 " style={{ paddingTop: '40px' }}>
        <h4 className='text-white mb-4'>LINKS</h4>
          <p className='text-white mb-2'>456 Cinema Blvd., Film City, CA 90210</p>
          <p className='text-white mb-2'> Phone: (321) 654-9870</p>
          <p className='text-white mb-2'> Email: support@moviemagic.com</p>
          <p className='text-white mb-2'>   </p>
        </div>
        <div className="col-3  " style={{ paddingTop: '40px' }}>
          <h4 className='text-white mb-4'>CATSY Studio</h4>
          <p className='text-white mb-2'>456 Cinema Blvd., Film City, CA 90210</p>
          <p className='text-white mb-2'> Phone: (321) 654-9870</p>
          <p className='text-white mb-2'>   Follow Us: [Facebook] [Twitter] [Instagram] [YouTube]</p>
        </div>

       
       

     <h5 className='text-white mb-2 fw-bolder text-center'> © 2024 Movie Magic Studio. All Rights Reserved.</h5>

       
      </div>
    </div>
  )
}

export default Footer