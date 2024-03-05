import React from 'react'
import Button from './Button'
import { FadeInBottom } from './FadeInBottom'
import Image from 'next/image'

const Hero = () => {
  return (
    //heroセクション
<section className="min-h-screen flex items-center justify-center relative inset-0">
    <Image
      src="/28787432_m.png"
      alt="background image"
      layout="fill"
      objectFit="cover"
      quality={100}
    />
    <div className="bg-black opacity-60 absolute inset-0"></div>

  <FadeInBottom>
    <div className="w-full mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl relative z-10 text-white text-center">
      <div className="flex flex-col items-center justify-center gap-12">
        <div className="mt-12">
          <h1 className="mt-2 mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-loose drop-shadow-2xl">
            Yuki Edamura
          </h1>
          <p className='mb-10 leading-relaxed drop-shadow-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </FadeInBottom>
</section>
  )
}

export default Hero