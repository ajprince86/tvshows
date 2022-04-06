import axios from "axios";


const CLIENT_URL1 = "https://api.tvmaze.com/search/shows?q="
const CLIENT_URL2 = "https://api.tvmaze.com/shows/"

export async function getTvShowData(input){
    try {
        //making api call
        const response1 = await axios.get(`${CLIENT_URL1}${input}`);
        console.log(response1.data);
        return response1.data;
    } catch (error) {
        console.log(error);
    }

}
export async function getTvShowDataById(id){
    try {
        const response2 = await axios.get(`${CLIENT_URL2}${id}`);
        console.log('im in gettvshowdatabyid method');
        console.log(response2.data);
        return response2;
    } catch (error) {
        console.log(error);
    }
}

export async function getSeasonDataById(id){
    try {
        const response3 = await axios.get(`${CLIENT_URL2}${id}/seasons`);
        console.log(response3.data);
        return response3.data;
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
