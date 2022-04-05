import React from 'react'
import "../styles/tvshows.css"
import { useNavigate } from 'react-router-dom'

function TvShows({ data }) {
  const navigate = useNavigate()
  return (
    <div className = "TvShows-gp">
        <div className = "TvShows-p" onClick={() => navigate(`/search/${data.show.id}`)}>
        <h1>{data.show.name}</h1>
        {(data.show.image !== null)? <img src = {data.show.image.medium} alt= "TvShow pic"/> : "picture not avaialble"}
        </div>
    </div>
  )
}

export default TvShows

// {/* <h1>{data.show.image.original}</h1> */}
//         {/* <h1>{data.show.image.medium}</h1> */}
//         {/* <img src = {data.show.image.medium} alt="post banner" /> */}
