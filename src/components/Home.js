import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "./home.css";
import { favoriteLists, upcomingShows } from "../services/constants.js";

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

        <Carousel breakPoints={breakPoints}>
          {upcomingShows.map((show, key) => {
            return (
              <img
                className="home-carousel"
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
    </div>
  );
}

export default Home;
