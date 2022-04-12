import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "./home.css";
import { favoriteLists, upcomingShows } from "../services/constants.js";

function Home() {
  const navigate = useNavigate();

  console.log(favoriteLists);
  return (
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
              onClick={() => navigate(`/search/${show.id}`)}
            />
          </div>
        );
      })}
      <h2 className="home-color">Upcoming Shows</h2>

      <Carousel>
        {upcomingShows.map((show, key) => {
          return (
            <img
              id={show.id}
              key={key}
              src={show.img}
              alt="show-title"
              onClick={() => navigate(`/search/${show.id}`)}
            />
          );
        })}
      </Carousel>
    </div>
  );
}

export default Home;
