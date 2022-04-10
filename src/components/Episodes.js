import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEpisodeDataById } from "../services/constants";

function Episodes() {
  const [episodeData, setEpisodeData] = useState([]);
  const { id } = useParams();
  const [toggle, setToggle] = useState(false)

  // console.log(id);
  // console.log(episodeData);

  const handleOnClick = () =>{
    setToggle(prevState => !prevState)
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEpisodeDataById(id);
      console.log(result);
      setEpisodeData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
    <h1>Episodes</h1>
    <table>
      <thead>
        <tr>
          <th>Number</th>
          <th>Date</th>
          <th>Name</th>
          <th>Rating</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        {(episodeData||[]).map((episode,index)=>{
            return (
              <tr>
                <td>{episode.number}</td>
                <td>{episode.airdate}</td>
                <td>{episode.name}</td>
                <td>{episode.rating.average}</td>
                <td><button onClick={handleOnClick}>summary
                { (toggle)? <div>{episode.summary}</div> : null}
                </button>
                
                </td>
              </tr>
            )
        })}
     
    </tbody>
  </table>
  </div>
    );
}

export default Episodes;
