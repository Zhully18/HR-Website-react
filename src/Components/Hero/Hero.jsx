import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg'
import { GiBeveledStar, GiFallingStar } from 'react-icons/gi'

const Hero = () => {
  return (
    <div>
        <div className="hero">
            <h1 className="hero_header">Empowering Your Workforce,<span> Transforming  <br />Your Business</span> </h1>
            <p> Comprehensive Human Resource Solutions to Elevate Your Organization <br />through innovative human resource solutions.</p>
            <div className="btns">
                <button className='cta-button'> Get Started</button>
            </div>
            <div className="icons">
              <GiBeveledStar className='two'/>
              <GiFallingStar className='three'/>
            </div>
            <img src={hero} alt="hero-img" className='hero_img'/>
        </div>
    </div>
  )
}

export default Hero