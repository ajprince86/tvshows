import axios from "axios";


const CLIENT_URL1 = "https://api.tvmaze.com/search/shows?q="

export async function getTvShowData(input){
    try {
        //making api call
        const response = await axios.get(`${CLIENT_URL1}${input}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }




const CLIENT_URL2 = "https://api.tvmaze.com/shows/"
export async function getTvShowDataById(id){
    try {
        const response = await axios.get(`${CLIENT_URL2}${id}`);
        console.log(response);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const favoriteLists = [
  "https://static.tvmaze.com/uploads/images/medium_portrait/28/72341.jpg",
  "https://static.tvmaze.com/uploads/images/medium_portrait/4/11322.jpg",
  "https://static.tvmaze.com/uploads/images/medium_portrait/359/898433.jpg",
  "https://static.tvmaze.com/uploads/images/medium_portrait/402/1006397.jpg",
  "https://static.tvmaze.com/uploads/images/medium_portrait/362/906711.jpg",
  "https://static.tvmaze.com/uploads/images/medium_portrait/145/363769.jpg",
];

