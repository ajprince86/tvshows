import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEpisodeDataById } from "../services/constants";
import "../styles/episodes.css";

function Episodes() {
  const [episodeData, setEpisodeData] = useState([]);
  const { id } = useParams();
  //const [toggle, setToggle] = useState(false)

  // console.log(id);
  // console.log(episodeData);

  // const handleOnClick = (index) =>{
  //   if (index + 1 == episodeData){
  //     setToggle(prevState => !prevState)}
  // }

  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEpisodeDataById(id);
      console.log(result);
      setEpisodeData(result);
    };
    fetchData();
  }, []);

  // function handleMouseOver(e){
  //   console.log(e.id)
  //   console.log(episodeData)
  //   const result = episodeData.filter((element)=>
  //   {//return element.id !== e.id})
  //   if (element.id !== e.id){
  //     return <p>{episodeData.summary}</p>
  //   }
  //     //setIsShown(true)
  // })}

  return (

    <div className="episodes-div">
      <h1 className="episodes-h1">Episodes</h1>
      <table>
        <thead>
          <tr>
            <th>Episode</th>
            <th>Date</th>
            <th>Name</th>
            <th>Rating</th>
            {/* <th>Summary</th> */}
          </tr>
        </thead>
        <tbody>
          {(episodeData || []).map((episode, index) => {
            return (
              <tr id={episode.id}>
                <td>{index + 1}</td>
                <td>{episode.airdate}</td>
                <td>{episode.name}</td>
                <td>{episode.rating.average}</td>

                {/* <td>{episode.summary.slice(3,episode.summary.length-4)}</td> */}
                {/* <td>
                  <button id={ episode.id }
                    onMouseEnter={(e) => handleMouseOver( episode )}
                    // onMouseLeave={() => setIsShown(false)}>
                      >
                      summary
                  </button>
                  {(isShown)? <div>{episode.summary}</div> : null}
                {/* { (toggle)? <div>{episode.summary}</div> : null} */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Episodes;
