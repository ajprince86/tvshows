import axios from "axios";

const CLIENT_URL1 = "https://api.tvmaze.com/search/shows?q=";
const CLIENT_URL2 = "https://api.tvmaze.com/shows/";
const CLIENT_URL3 = "https://api.tvmaze.com/seasons/";

export async function getTvShowData(input) {
  try {
    //making api call
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
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/394/986248.jpg",
  },
  {
    id: 52260,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/395/988970.jpg",
  },
  {
    id: 46273,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/400/1001018.jpg",
  },
  {
    id: 33352,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/394/986215.jpg",
  },
  {
    id: 44778,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/396/991595.jpg",
  },
  {
    id: 42842,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/277/693469.jpg",
  },
  {
    id: 42827,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/360/901551.jpg",
  },
  {
    id: 49334,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/398/996391.jpg",
  },
  {
    id: 47856,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/262/656107.jpg",
  },
  {
    id: 43519,
    img: "https://static.tvmaze.com/uploads/images/medium_portrait/399/999587.jpg",
  },
];

//Star Trek: Strange New Worlds 48090
//Obi-Wan Kenobi 52260
//Resident Evil 46273
//The Lord of the Rings: The Rings of Power 33352
//House of the Dragon 44778
//Gremlins 42842
//The Sandman 42827
//Shining Girls 49334
//The Terminal List 47856
//Ms. Marvel 43519

//If the show has no image we should have the name show up below
//example is when you search dexter
