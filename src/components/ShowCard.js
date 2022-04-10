import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTvShowDataById, getSeasonDataById } from "../services/constants";
import { useNavigate } from "react-router-dom";
// import getTvShowDataById from '../services/constants';
// import getSeasonDataById from '../services/constants';
import "../styles/showcard.css";
import Carousel from "react-elastic-carousel";
import pic_not_available from "../images/pic_not_available.jpg";

function ShowCard() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  const [seasonData, setSeasonData] = useState([]);

  const navigate = useNavigate();

  // const tempId = parseInt(id);
  // console.log(id);

  async function fetchData() {
    try {
      const res = await getTvShowDataById(id);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchSeason() {
    try {
      const res = await getSeasonDataById(id);
      console.log(res.length);
      if (res.length >= 1) {
        setSeasonData(res);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSeason();
  }, [id]);
  // console.log(getSeasonDataById(56084));

  return (
    <div className="show-card-gp">
      <div className="show-card-p1">
        {data.image ? (
          <img
            className="stock-card-img"
            src={data.image.medium}
            alt="tv show pic"
          />
        ) : (
          "picture not avaialble"
        )}
        <div className="show-card-seasons">
          {/* displaying season data */}
          <h5> Seasons available: {seasonData.length}</h5>
          {/* If Season data is not available, displaying default pic */}
          {seasonData ? (
            <div style={{ width: "300px", marginTop: "10px" }}>
              <Carousel>
                {seasonData.map((ele) => {
                  return ele.image ? (
                    <img
                      className="carousel-img"
                      src={ele.image.medium}
                      alt=""
                      id={ele.number}
                      onClick={() => navigate(`/episodes/${ele.id}`)}
                    />
                  ) : (
                    <img
                      className="not-avail-img"
                      src={pic_not_available}
                      alt={pic_not_available}
                      id={ele.number}
                      onClick={() => navigate(`/episodes/${ele.id}`)}
                    />
                  );
                })}
              </Carousel>
            </div>
          ) : (
            <div style={{ width: "300px", marginTop: "10px" }}>
              {" "}
              I am here
              <img
                className="not-avail-img"
                src={pic_not_available}
                alt={pic_not_available}
              />
            </div>
          )}
        </div>
      </div>

      <div className="show-card-p2">
        <div className="show-card-c1">
          <h1>{data.name}</h1>
        </div>
        <div className="show-card-c2">
          <div>
            <h5>
              <span>genres: </span>
              {JSON.stringify(data.genres)}
            </h5>
            <h5>
              <span>Status: </span>
              {data.status}
            </h5>
            <h5>
              <span>Rating average: </span>
              {data.rating
                ? JSON.stringify(data.rating.average)
                : "data not available"}
            </h5>
            <h5>
              <span>Premiered on: </span>
              {data.premiered}
            </h5>
            <h5>
              <span>Network Country Name: </span>
              {data.network ? data.network.country.name : "data not available"}
            </h5>
          </div>
          <div>
            <h5>
              <span>Summary: </span>
              {data.summary ? (
                <h5 id="sum-id">{JSON.stringify(data.summary)}</h5>
              ) : (
                "data is not available"
              )}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;

// {data.genres[0]} {data.genres[1]}

// {/* // /* // return <button>Season {ele.number}</button>
// // // return <h4></h4>
// // // <h5 className="h5-seasons">Season{ele.number}</h5> */}

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
