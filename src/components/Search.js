import { useState } from "react";
import { getTvShowData } from '../services/constants'
import TvShows from "./TvShows";
import '../styles/search.css';

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
            {/* <h1>Search page</h1> */}
            <div className="search-p">
                <div className="search-txt-btn">
                <input className = "input-search" type="text" onChange={(e) =>{handleOnChange(e)}}/>
                <button className = "btn-search" onClick={(e) => handleOnClick(e)}>&#x1F50D; Search Show</button>
                </div>
                <div className="search-result">{renderPost()}</div>
                {/* {console.log(queryLog)} */}
                {/* <div className = "search-history" style={{display: "flex", border: "1px solid black", marginTop:"10px"}}> */}
                {/* <div style={{display: "flex"}}> */}
                <div className = "search-history">
                    <div className="search-history-c">
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