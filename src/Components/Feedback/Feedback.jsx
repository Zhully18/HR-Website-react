import React from 'react'
import './Feedback.css'
import { feedback } from '../data'

const Feedback = () => {
  return (
    <div className="feedback">
        <h5>Hear From Our Clients</h5>
        <div className="customers">
          {feedback.map(({image,icon, name, company, comment}, index)=> {
            return(
            <div className="item">
                <div className="user">
                    <img src={image} alt="" />
                    <div className="info">
                      <h5>{name}</h5>
                      <p>{company}</p>
                    </div>
                </div>
                <div className="comment">
                  <h2>{icon}</h2>
                </div>
                <p>{comment}</p>
            </div>
            )
          })}
        </div>
    </div>
  )
}

export default Feedback