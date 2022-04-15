import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "./home.css";
import { favoriteLists, upcomingShows, scolling_movie } from "../services/constants.js";
import bgImage from "../videos/website-video.mp4";
import "./home.scss"

function Home() {
  const navigate = useNavigate();
  const breakPoints = [
    {
      width: 1,
      itemsToShow: 1,
    },
    {
      width: 220,
      itemsToShow: 2,
    },
    {
      width: 440,
      itemsToShow: 3,
    },
  ];

  console.log(favoriteLists);

 
  return (
    <div className="container-p">
      <div>
        <video className="video-home" autoPlay loop muted>
          <source src ={bgImage} type="video/mp4" />
        </video>
        <div className ="video-text-container"><h1>WELCOME TO TVHUB-where fun begins!</h1></div>
      </div>
    <div className="container">
      {favoriteLists.map((show, key) => {
        return (
          <div className="show">
            <img
              id={show.id}
              className="home-img"
              src={show.img}
              key={key}
              alt="show-title"
              onClick={() => navigate(`/search/show/${show.id}`)}
            />
          </div>
        );
      })}
    </div>

      <div>
       <h2 className="home-color">Upcoming Shows</h2>
        <Carousel breakPoints={breakPoints}>
          {upcomingShows.map((show, key) => {
            return (
              <img
                className="home-carousel"
                id={show.id}
                key={key}
                src={show.img}
                alt="show-title"
                onClick={() => navigate(`/search/show/${show.id}`)}
              />
            );
          })}
        </Carousel>
      </div>
      <div className = "container-scoller-box">
        <div className = "scolling-img" >
          {scolling_movie.map((movie, key) => {
              return (
              <img 
              style= {{width: "150px"}}
              src={movie.img} />
              )})}
        </div>
      </div>
    </div>
  );
}

export default Home;
