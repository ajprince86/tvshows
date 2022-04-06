import React from "react";
import "./home.css";

import { favoriteLists } from "../services/constants.js";

function Home() {
  console.log(favoriteLists);
  return (
    <div className="container">
      {/* <h1>This is App Home</h1> */}
      {favoriteLists.map((show, key) => {
        return (
          <div className="show">
            <img className="home-img" src={show} key={key} alt="show-title" />
          </div>
        );
      })}
    </div>
  );
}

export default Home;
