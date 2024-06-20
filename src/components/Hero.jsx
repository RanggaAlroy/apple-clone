import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { heroVideo, smallHeroVideo } from '../utils'
import { useState } from 'react'
import { useEffect } from 'react'


const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

 const handleVideo = () => {
    if(innerWidth < 760) {
        setVideoSrc(smallHeroVideo)
    } else {
        setVideoSrc(heroVideo)
    }
 }
    useEffect(() => {
      window.addEventListener('resize', handleVideo)
    
      return () => {
        window.removeEventListener('resize', handleVideo)
      }
    }, [])
    

    useGSAP(() => {
        gsap.to('#hero-title', { opacity:1, delay: 2})
        gsap.from('#cta', {opacity: 0, y: 50, delay: 2})
    }, [])

  return (
    <section className="w-full h-screen bg-black relative common-padding">
    <div className="h-5/6 w-full flex-center flex-col">
      <p id="hero-title" className="hero-title">iPhone 15 Pro</p>
      <div className="md:w-10/12 w-9/12">
        <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>

    <div
      id="cta"
      className="flex flex-col items-center"
    >
      <a href="#highlights" className="btn">Buy</a>
      <p className="font-normal text-xl">From $199/month or $999</p>
    </div>
  </section>
  )
}

export default Hero