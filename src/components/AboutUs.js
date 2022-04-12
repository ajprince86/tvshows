import React from 'react'
import team from '../data/teamData';
import Team from './Team';
import '../styles/about.css'


function AboutUs() {
  return (// use map 
    <div className = "aboutUs">
      <div className='about-h1'><h1> Team Introduction </h1></div>
      <div className='aboutus-div'>
       {team.map((teamData, index) => {
         return <Team teamData = {teamData} key={index}/>
       })}
      </div>
    </div>
  )
}

export default AboutUs
