import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvShowDataById, getSeasonDataById} from '../services/constants';
import "../styles/showcard.css";

function ShowCard() {
    const [data,setData] = useState([]);
    const { id } = useParams();

    const [seasonData, setSeasonData] = useState([])

    // const tempId = parseInt(id);

    console.log(id);

    // useEffect(() =>{
    //     const fetchData = async () =>{
    //         try {
    //             const res = await getTvShowDataById(tempId);
    //             // console.log(res.data);
    //             setData(res.data);
    //         }
    //      catch (error) {
    //        console.log(error); 
    //     }
    // }
    //     fetchData();
    // }, [id])

    async function fetchData(){
      try {
        const res = await getTvShowDataById(id);
        setData(res.data);
      } catch (error) {
        console.log(error); 
      }
    }

    useEffect(()=>{
      fetchData();
    },[])

  async function fetchSeason(){
    try {
        const res = await getSeasonDataById(id);
        console.log(res);
        setSeasonData(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchSeason();
  },[])


  return (
    <div className="show-card-gp">
      <div className="show-card-p1">
          {(data.image)? <img className="stock-card-img" src = {data.image.medium} alt = "tv show pic"/> : "picture not avaialble"}
          <div className="show-card-seasons">

            <h5> Seasons available: {seasonData.length}</h5>

            {(seasonData||[]).map((ele)=>{
              return<section>
                <option></option> </section>
            // {/* // return <button>Season {ele.number}</button>
            // // return <h4></h4>
            // // <h5 className="h5-seasons">Season{ele.number}</h5>
          }) 
         } 
          </div>
      </div>
      <div className="show-card-p2">
          <div className="show-card-c1">
              <h1>{data.name}</h1>
          </div>
          <div className="show-card-c2">
              <div>
                <h5><span>genres: </span>{JSON.stringify(data.genres)}</h5>
                <h5><span>Status: </span>{data.status}</h5>
                <h5><span>Rating average: </span>{(data.rating) ? JSON.stringify(data.rating.average) : "data not available"}</h5>
                <h5><span>Premiered on: </span>{data.premiered}</h5>
                <h5><span>Network Country Name: </span>{(data.network) ? data.network.country.name: "data not available"}</h5>
              </div>
              <div>
                <h5><span>Summary: </span>{(data.summary)? <h5 id="sum-id">{JSON.stringify(data.summary)}</h5> : "data is not available"}</h5> 
              </div>
          </div>
      </div>
    </div>
  )
}

export default ShowCard;
// {data.genres[0]} {data.genres[1]}
