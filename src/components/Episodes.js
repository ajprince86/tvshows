import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEpisodeDataById } from "../services/constants";

function Episodes() {
  const [episodeData, setEpisodeData] = useState([]);
  const { id } = useParams();
  // console.log(id);
  // console.log(episodeData);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getEpisodeDataById(id);
      console.log(result);
      setEpisodeData(result);
    };
    fetchData();
  }, []);

  return <h1>Hello All</h1>;
}

export default Episodes;
