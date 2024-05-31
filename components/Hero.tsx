import React from 'react'
import p from '@/public/post.jpg'
import Image from 'next/image'
const Hero = () => {
  return ( 
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            </div>
            <Image className='w-full max-h-[500px] object-cover' src={p}   />
        </div>
    </div>

    
  )
}

export default Hero