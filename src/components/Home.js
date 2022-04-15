import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "./home.css";

import {
  favoriteLists,
  upcomingShows,
  scolling_movie,
} from "../services/constants.js";
import StaffPicks from "../components/StaffPicks";
import Romance from "../components/Romance";
import Action from "../components/Action";
import Classic from "../components/Classic";
import Hero from "../components/Hero";
import bgImage from "../videos/website-video.mp4";
import "./home.scss";

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
      <div className="video-text-container">
        <h1 style={{display:"flex", alignContent:"center", justifyContent:"center"}}>WELCOME TO THE <h4 style={{color: "red",marginLeft:"5px", marginRight: "5px"}}> TVHUB </h4></h1>
      </div>
      <div className="video-div">
        <video className="video-home" autoPlay loop muted>
          <source src={bgImage} type="video/mp4" />
        </video>
      </div>
      <div>
        <h2 style={{ color: "red" }} className="home-color">
          Soon To be released!!
        </h2>
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
      <StaffPicks />
      <Romance />
      <Action />
      <Hero />
      <Classic />
      <div className="container-scoller-box">
        <div className="scolling-img">
          {scolling_movie.map((movie, key) => {
            return <img style={{ width: "250px" }} src={movie.img} />;
          })}
        </div>
        <h1>
          <span className="span-r">ENDLESS SEARCHES!!</span>
        </h1>
      </div>
    </div>
  );
}

export default Home;
