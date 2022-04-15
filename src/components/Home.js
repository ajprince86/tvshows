import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "./home.css";
import { favoriteLists, upcomingShows, scolling_movie } from "../services/constants.js";
import { upcomingShows } from "../services/constants.js";
import StaffPicks from "../components/StaffPicks";
import Romance from "../components/Romance";
import Action from "../components/Action";
import Classic from "../components/Classic";
import bgImage from "../videos/website-video.mp4";
import "./home.scss"

function Home() {
  const navigate = useNavigate();
  // const breakPoints = [
  //   {
  //     width: 1,
  //     itemsToShow: 1,
  //   },
  //   {
  //     width: 220,
  //     itemsToShow: 2,
  //   },
  //   {
  //     width: 440,
  //     itemsToShow: 3,
  //   },
  // ];
  return (
    <div className="container-p">
      <div>
        <video className="video-home" autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>
        <div className="video-text-container">
          <h1>WELCOME TO TVHUB-where fun begins!</h1>
        </div>
      </div>
      <div>
        <h2 className="home-color">Soon To be released!!</h2>
        <Carousel>
          {upcomingShows.map((show, key) => {
            return (
              <img
                width="70%"
                height="500px"
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
      {/* <img src={obi_wan_kenobi_main} width="70%" alt="obi_wan" />
      <img src={star_trek} width="70%" height="500px" alt="star_trek" />
      <img src={resident_evil} width="70%" height="500px" alt="resident_evil" />
      <img src={rings_power} width="70%" height="500px" alt="rings_power" />
      <img src={house_dragon} width="70%" height="500px" alt="house_dragon" />
      <img src={gremlins} width="70%" height="500px" alt="gremlins" />
      <img src={sandman} width="70%" height="500px" alt="sandman" />
      <img src={shining_girls} width="70%" height="500px" alt="shining_girls" />
      <img src={terminal_list} width="70%" height="500px" alt="terminal_list" />
      <img src={ms_marvel} width="70%" height="500px" alt="ms_marvel" /> */}
      <StaffPicks />
      <Romance />
      <Action />
      <Classic />
    </div>
  );
}

export default Home;
