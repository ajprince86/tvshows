import { useState } from "react";
import { getTvShowData } from '../services/constants'
import TvShows from "./TvShows";

function Search(){
    const [tvShowData, setTvSowData] = useState([]);
    const [query, setQuery] = useState('');

    const [queryLog, setQueryLog] = useState([]);

    const handleOnChange = (e) =>{
        e.preventDefault();
        setQuery(e.target.value);
        
    }

    async function handleOnClick(e){
        e.preventDefault();
        try {
            const tempData = [...queryLog,query];
            setQueryLog(tempData);
            let res = await getTvShowData(query);
            // console.log(res);
            if(res !== []){
                setTvSowData(res);
            }
            else{
                alert("Not found any results! Try again!!"); 
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    const renderPost = ()=>{
        return(
            tvShowData.map((element,index) =>{
                return <TvShows
                data = {element}
                key = {index}
               />
            })
         )
            }

    return(
        <div>
            <h1>Search page</h1>
            <div>
                <input type="text" onChange={(e) =>{handleOnChange(e)}}/>
                <button onClick={(e) => handleOnClick(e)}>TV SHOW</button>
                <div>{renderPost()}</div>
                {/* {console.log(queryLog)} */}
                <div style={{display: "flex", border: "1px solid black", marginTop:"10px"}}>
                    <div style={{display: "flex"}}>
                       <h3 style ={{marginRight:"10px"}}>Search History</h3>
                         {(queryLog||[]).map((element, index) =>{
                             
                         return <h3>{index + 1}.{element}</h3>
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;