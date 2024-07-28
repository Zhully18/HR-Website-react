import React from 'react'
import { teams } from '../data'
import './Team.css'

const Team = () => {
  return (
    <div>
        <div className="team">
            <h2>Meet Our <span>Beautiful Team</span> </h2>
            <p>Our Team of experts is </p>
            <div className="team-members">
              {teams.map((member, index) => (
                <div key={index} className="team-member">
                  <img src={member.img} alt={member.name} />
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Team