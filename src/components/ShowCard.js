import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvShowDataById } from '../services/constants';

function ShowCard() {
    const [data,setData] = useState([]);
    const { id } = useParams();

    useEffect(() =>{
        const fetchData = async () =>{
            const res = await getTvShowDataById(id);
            console.log("I am here" + id);
            console.log(res);
            setData(res);
        }
        fetchData();
    }, [id])


  return (
    <div>
      <h1>{data.data.name}</h1>
      <h5> genres: {data.data.genres}</h5>
      <h5>Rating average: {data.data.rating.average}</h5>
      <h5> Summary: {data.data.summary}</h5>
      <h5>Status: {data.data.status}</h5>
      <h5>Premiered on: {data.data.premiered}</h5>
      <h5>network country name: {data.data.network.country.name}</h5>
       {(data.data.image !== null)? <img src = {data.data.image.medium} alt= "TvShow pic"/> : "picture not avaialble"}
    </div>
  )
}

export default ShowCard
