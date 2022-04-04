import { useState } from "react";
import { getTvShowData } from '../services/constants'
import TvShows from "./TvShows";

function Search(){
    const [tvShowData, setTvSowData] = useState([]);
    const [query, setQuery] = useState('');

    const handleOnChange = (e) =>{
        e.preventDefault();
        setQuery(e.target.value);
        console.log(query);
    }

    async function handleOnClick(e){
        e.preventDefault();
        try {
            let res = await getTvShowData(query);
            // console.log(res);
            if(res !== []){
                tvShowData(res);
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
            </div>
        </div>
    )
}

export default Search;