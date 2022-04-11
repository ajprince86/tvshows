import React from 'react';
import "../styles/tvshows.css";
import { useNavigate } from 'react-router-dom';
import pic_not_available from "../images/pic_not_available.jpg";

function TvShows({ data }) {
  const navigate = useNavigate()
  return (
    <div className = "TvShows-gp">
        <div className = "TvShows-p" onClick={() => navigate(`/search/${data.show.id}`)}>
        {/* <h1>{data.show.name}</h1> */}
        {(data.show.image !== null)? <img className="stock-card-img" src = {data.show.image.medium} alt= "TvShow pic"/> : 
            <img
                className="not-avail-img"
                src={pic_not_available}
                alt={pic_not_available}
              />}
        </div>
    </div>
  )
}

export default TvShows

// {/* <h1>{data.show.image.original}</h1> */}
//         {/* <h1>{data.show.image.medium}</h1> */}
//         {/* <img src = {data.show.image.medium} alt="post banner" /> */}
