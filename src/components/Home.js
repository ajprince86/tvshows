import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-elastic-carousel";
import "./home.css";
import { favoriteLists, upcomingShows } from "../services/constants.js";
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
      <div className = "scolling-img">
        <img src='https://static.tvmaze.com/uploads/images/medium_portrait/28/72341.jpg' alt=''/>
      <img src='https://static.tvmaze.com/uploads/images/medium_portrait/399/997839.jpg' alt=''/>
<img src='https://static.tvmaze.com/uploads/images/medium_portrait/4/11322.jpg' alt=''/>
<img src='https://static.tvmaze.com/uploads/images/medium_portrait/359/898433.jpg' alt=''/>
<img src='https://static.tvmaze.com/uploads/images/medium_portrait/362/906711.jpg' alt=''/>
<img src='https://static.tvmaze.com/uploads/images/medium_portrait/145/363769.jpg' alt=''/>
<img src='https://static.tvmaze.com/uploads/images/medium_portrait/394/986248.jpg' alt=''/>
<img src='https://static.tvmaze.com/uploads/images/medium_portrait/400/1001018.jpg' alt=''/>
<img src='https://static.tvmaze.com/uploads/images/medium_portrait/394/986215.jpg' alt=''/>
<img src='https://static.tvmaze.com/uploads/images/medium_portrait/396/991595.jpg' alt=''/>
      </div>
    </div>
  );
}

export default Home;
