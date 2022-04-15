import obi_wan_kenobi from "../images/obi_wan_kenobi_main.jpg";
import star_trek from "../images/star_trek.jpg";
import resident_evil from "../images/resident_evil.jpg";
import rings_power from "../images/rings_power.jpg";
import house_dragon from "../images/house_dragon.jpg";
import gremlins from "../images/gremlins.jpg";
import sandman from "../images/sandman.jpg";
import shining_girls from "../images/shining_girls.jpg";
import terminal_list from "../images/terminal_list.jpg";
import ms_marvel from "../images/ms_marvel.jpg";

import axios from "axios";

const CLIENT_URL1 = "https://api.tvmaze.com/search/shows?q=";
const CLIENT_URL2 = "https://api.tvmaze.com/shows/";
const CLIENT_URL3 = "https://api.tvmaze.com/seasons/";

export async function getTvShowData(input) {
  try {
    //making api call
    console.log(input);
    const response1 = await axios.get(`${CLIENT_URL1}${input}`);
    console.log(response1.data);
    return response1.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getTvShowDataById(id) {
  try {
    const response2 = await axios.get(`${CLIENT_URL2}${id}`);
    console.log("im in gettvshowdatabyid method");
    console.log(response2.data);
    return response2;
  } catch (error) {
    console.log(error);
  }
}

export async function getSeasonDataById(id) {
  try {
    const response3 = await axios.get(`${CLIENT_URL2}${id}/seasons`);
    console.log(response3.data);
    return response3.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getEpisodeDataById(id) {
  try {
    const response4 = await axios.get(`${CLIENT_URL3}${id}/episodes`);
    console.log(response4.data);
    return response4.data;
  } catch (error) {
    console.log(error);
  }
}

export const favoriteLists = [
  {
    id: 56084,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/399/997839.jpg",
  },

  {
    id: 7903,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/28/72341.jpg",
  },

  {
    id: 526,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/4/11322.jpg",
  },

  {
    id: 83,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/359/898433.jpg",
  },

  {
    id: 84,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/402/1006397.jpg",
  },

  {
    id: 43687,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/362/906711.jpg",
  },

  {
    id: 161,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/145/363769.jpg",
  },
];

export const upcomingShows = [
  {
    id: 48090,
    // img: "https://static.tvmaze.com/uploads/images/medium_portrait/394/986248.jpg",
    img: star_trek,
  },

  {
    id: 52260,
    // img: "https://static.tvmaze.com/uploads/images/medium_portrait/395/988970.jpg",
    img: obi_wan_kenobi,
  },
  {
    id: 46273,
    // img: "https://static.tvmaze.com/uploads/images/medium_portrait/400/1001018.jpg",
    img: resident_evil,
  },
  {
    id: 33352,
    // img: "https://static.tvmaze.com/uploads/images/medium_portrait/394/986215.jpg",
    img: rings_power,
  },
  {
    id: 44778,
    // img: "https://static.tvmaze.com/uploads/images/medium_portrait/396/991595.jpg",
    img: house_dragon,
  },
  {
    id: 42842,
    // img: "https://static.tvmaze.com/uploads/images/medium_portrait/277/693469.jpg",
    img: gremlins,
  },
  {
    id: 42827,
    // img: "https://static.tvmaze.com/uploads/images/medium_portrait/360/901551.jpg",
    img: sandman,
  },
  {
    id: 49334,
    //   img: "https://static.tvmaze.com/uploads/images/medium_portrait/398/996391.jpg",
    img: shining_girls,
  },

  {
    id: 47856,
    // img: "https://static.tvmaze.com/uploads/images/medium_portrait/262/656107.jpg",
    img: terminal_list,
  },
  {
    id: 43519,
    //   img: "https://static.tvmaze.com/uploads/images/medium_portrait/399/999587.jpg",
    // },
    img: ms_marvel,
  },
];

export const romance = [
  {
    id: 42966,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/398/995479.jpg",
  },
  {
    id: 42848,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/362/905243.jpg",
  },
  {
    id: 42361,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/249/623354.jpg",
  },
  {
    id: 38894,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/257/643559.jpg",
  },
];

export const action = [
  {
    id: 44391,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/395/988157.jpg",
  },
  {
    id: 45121,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/395/987549.jpg",
  },
  {
    id: 5079,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/210/525472.jpg",
  },
  {
    id: 28160,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/280/701868.jpg",
  },
];

export const classic = [
  {
    id: 825,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/6/15722.jpg",
  },

  {
    id: 437,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/3/9021.jpg",
  },
  {
    id: 722,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/6/15097.jpg",
  },
  {
    id: 665,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/5/14728.jpg",
  },
  {
    id: 1249,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/7/17917.jpg",
  },
  {
    id: 1474,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/8/21115.jpg",
  },
];

const anime = [
  {
    id: 2103,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/11/29190.jpg",
  },
  {
    id: 555,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/79/199224.jpg",
  },
];

const heros = [
  {
    id: 43518,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/398/995334.jpg",
  },
  {
    id: 41749,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/295/739854.jpg",
  },
  {
    id: 50603,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/380/950547.jpg",
  },
  {
    id: 41007,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/320/801227.jpg",
  },
  {
    id: 16544,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/179/448895.jpg",
  },
  {
    id: 27557,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/348/871734.jpg",
  },
  {
    id: 15299,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/399/998261.jpg",
  },
];

//Staff picks
