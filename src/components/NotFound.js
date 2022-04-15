import React from 'react';
import funny from '../images/funny.gif';
import '../styles/notFound.css'

function NotFound() {
  return (
    <div>
        <h1 className= "h1-notFound">404 Not Found</h1>
        <img className="img-notfound" src = {funny} alt="Nothing"/>
    </div>
  )
}

export default NotFound
