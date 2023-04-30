import React from 'react'
import tourist from '../assets/video/tourist.mp4'

function Hero() {
  return (
    <div className='w-full h-screen relative'>
        <video className='w-full h-screen object-cover' src={tourist} autoPlay loop muted/>
</div>
  )
}

export default Hero