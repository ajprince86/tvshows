import React from 'react'
import team from '../data/teamData';
import Team from './Team';
import '../styles/about.css'
import { FaGithub } from 'react-icons/fa';

function AboutUs() {
  return (// use map 
    <div className = "aboutUs">
      <div className='about-h1'><h1> Team Introduction </h1></div>
      <div className='aboutus-div'>
       {team.map((teamData, index) => {
         return <Team teamData = {teamData} key={index}/>
       })}
      </div>
      <div className='about'><h1>Team Github:</h1><a href="https://github.com/ajprince86/tvshows" >< FaGithub /></a></div>
    </div>
  )
}

export default AboutUs
