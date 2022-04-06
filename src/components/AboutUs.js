import React from 'react'
import team from '../data';
import Team from './Team';


function AboutUs() {
  return (// use map 
    <div className = "aboutUs">
      <h1> Team Introduction </h1>
       {team.map((teamData, index) => {
         return <Team teamData = {teamData} key={index}/>
       })}
    </div>
  )
}

export default AboutUs
