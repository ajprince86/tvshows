import { useEffect, useState } from "react";
import { getTvShowData } from '../services/constants'
import TvShows from "./TvShows";
import '../styles/search.css';
import { useParams } from "react-router-dom";

function Search(){
    const [tvShowData, setTvSowData] = useState([]);
    // const [query, setQuery] = useState('');

    // const [queryLog, setQueryLog] = useState([]);

    //new code:
    const { name } = useParams();
    // start-working code
    // const handleOnChange = (e) =>{
    //     e.preventDefault();
    //     setQuery(e.target.value);
    // }
    //end-working code

    // async function handleOnClick(e){
    //     e.preventDefault();
    //     try {
    //         // const tempData = [...queryLog,query];
    //         // setQueryLog(tempData);
    //         let res = await getTvShowData(query);
    //         // console.log(res);
    //         if(res !== []){
    //             setTvSowData(res);
    //         }
    //         else{
    //             alert("Not found any results! Try again!!"); 
    //         }
            
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect (() =>{
        async function fetchData(){
            try {
                const result = await getTvShowData(name);
                if(result !== []){
                    setTvSowData(result);
                }else{
                alert("Not found any results! Try again!!"); 
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[name])
    
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
//&#x1F50E;&#xFE0E;(new)
//&#x1F50D;(used)
//&#128269;(right)
    return(
        <div>
            {/* <h1>Search page</h1> */}
            <div className="search-p">
                {/*start-working code */}
                {/* <div className="search-txt-btn">
                <input className = "input-search" type="text" onChange={(e) =>{handleOnChange(e)}}/>
                <button className = "btn-search" onClick={(e) => handleOnClick(e)}>&#128269; Search Show</button>
                </div> */}
                {/*end-working code */}
                <div className="search-result">{renderPost()}</div>
                {/* {console.log(queryLog)} */}
                {/* <div className = "search-history" style={{display: "flex", border: "1px solid black", marginTop:"10px"}}> */}
                {/* <div style={{display: "flex"}}> */}
                {/* start working code */}
                {/* <div className = "search-history">
                    <div className="search-history-c">
                       <h3 style ={{marginRight:"10px"}}>Search History</h3>
                         {(queryLog||[]).map((element, index) =>{
                             
                         return <h3>{index + 1}.{element}</h3>
                        })
                        }
                    </div>
                </div> */}
                {/* endworking code */}
            </div>
        </div>
    )
}

export default Search;