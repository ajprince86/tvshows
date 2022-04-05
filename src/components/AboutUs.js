import React from 'react'

function AboutUs({ name, title, introduction, image }) {
  return (// use map 
    <div className = "aboutUs">
      <h1> Team Introduction </h1>
      <h3> { name }</h3>
      <img ></img>
      <h3> { title }</h3>
      <h3> { introduction }</h3>
    </div>
  )
}

export default AboutUs
