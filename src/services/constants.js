import axios from 'axios';

const CLIENT_URL = "https://api.tvmaze.com/search/shows?q="

export async function getTvShowData(input){
    try {
        //making api call
        const response = await axios.get(`${CLIENT_URL}${input}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}
