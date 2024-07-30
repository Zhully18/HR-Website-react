import React from 'react'
import './About.css'
import img from '../../assets/about.jpg'
import { about_list } from '../data'

const About = () => {
  return (
    <div>
        <div className="about" id='about'>
          <div className="left_about">
              <img src={img} alt="about_img" />
          </div>
          <div className="right_about">
            <h2 className='right_header'> About Us</h2>
            <p>At SeamFull HR, we are dedicated to transforming businesses through 
                innovative human resource solutions. With years of experience and a team of
                 seasoned HR professionals, we help organizations of all sizes manage their workforce
                  efficiently and effectively. Our mission is to empower your employees and optimize your 
                  HR processes, driving your business towards greater success.</p>
            {about_list.map(({icon, title}) => {
                return (
                    <div className="list_container">
                        <div className="list">
                            <h2 className="icon">{icon} </h2>
                            <p>{title} </p>
                        </div>
                    </div>
                )
            })}
          </div>
        </div>
    </div>
  )
}

export default About