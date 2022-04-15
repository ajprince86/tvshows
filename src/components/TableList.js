//npm i react-table
// import axios from "axios";
// import React, { useEffect, useState, useMemo } from "react";
// import { useHref } from "react-router-dom";
// import { useTable } from "react-table";


// function TableList() {
//     const [episodes, setEpisodes] = useState([]);

//     const fetchEpisodes = async () => {
//         const response = await axios.get('https://api.tvmaze.com/seasons/1/episodes')
//         .catch(err => console.log(err));

//         if(response) {
//             const episodes = response.data;
//             console.log("episodes:", episodes);
//             setEpisodes(episodes);
//         }
//     };
   

//     const data = useMemo(()=>([
//         {
//             "id": 1,
//             "url": "https://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
//             "name": "Pilot",
//             "season": 1,
//             "number": 1,
//             "type": "regular",
//             "airdate": "2013-06-24",
//             "airtime": "22:00",
//             "airstamp": "2013-06-25T02:00:00+00:00",
//             "runtime": 60,
//             "rating": {
//               "average": 7.7
//             },
//             "image": {
//               "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
//               "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg"
//             },
//             "summary": "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
//             "_links": {
//               "self": {
//                 "href": "https://api.tvmaze.com/episodes/1"
//               }
//             }
//           },
//           {
//             "id": 2,
//             "url": "https://www.tvmaze.com/episodes/2/under-the-dome-1x02-the-fire",
//             "name": "The Fire",
//             "season": 1,
//             "number": 2,
//             "type": "regular",
//             "airdate": "2013-07-01",
//             "airtime": "22:00",
//             "airstamp": "2013-07-02T02:00:00+00:00",
//             "runtime": 60,
//             "rating": {
//               "average": 7.3
//             },
//             "image": {
//               "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/1/4389.jpg",
//               "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4389.jpg"
//             },
//             "summary": "<p>While the residents of Chester's Mill face the uncertainty of life in the dome, panic is heightened when a house goes up in flames and their fire department is outside of the dome.</p>",
//             "_links": {
//               "self": {
//                 "href": "https://api.tvmaze.com/episodes/2"
//               }
//             }
//           },
//           {
//             "id": 3,
//             "url": "https://www.tvmaze.com/episodes/3/under-the-dome-1x03-manhunt",
//             "name": "Manhunt",
//             "season": 1,
//             "number": 3,
//             "type": "regular",
//             "airdate": "2013-07-08",
//             "airtime": "22:00",
//             "airstamp": "2013-07-09T02:00:00+00:00",
//             "runtime": 60,
//             "rating": {
//               "average": 7.1
//             },
//             "image": {
//               "medium": "https://static.tvmaze.com/uploads/images/medium_landscape/1/4390.jpg",
//               "original": "https://static.tvmaze.com/uploads/images/original_untouched/1/4390.jpg"
//             },
//             "summary": "<p>When a former deputy goes rogue, Big Jim recruits Barbie to join the manhunt to keep the town safe. Meanwhile, Junior is determined to escape the dome by going underground.</p>",
//             "_links": {
//               "self": {
//                 "href": "https://api.tvmaze.com/episodes/3"
//               }
//             }
//           }
//     ]))  //data list

//     const columns = useMemo(() =>[
//         {
//             Header: "Season", //column Name
//             accessor: "season"  //key property 
//         },
//         {
//             Header: "Name", //column Name
//             accessor: "name"  //key property 
//         },
//         {
//             Header: "Number", //column Name
//             accessor: "number"  //key property 
//         },
//         {
//             Header: "Run Time", //column Name
//             accessor: "runtime"  //key property 
//         },
//         {
//             Header: "Rating", //column Name
//             accessor: "rating"  //key property 
//         },
//     ],[]
//     );

//     //const productsData = useMemo (() => [...products], [products]);

//     //const productsColumns = useMemo(() => [...columns], [columns]);

//     const tableInstance = useTable({ columns, data })  //2 parameters: needed defined data and columns

//     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

//     useEffect(()=>{
//         fetchEpisodes();
//     }, []);

//     return (// use map 
//       <div className = "aboutUs">
//         <h1> Episodes  </h1>
//         <table {...getTableProps() }>
//             <thead>
//                 {headerGroups.map((headerGroup, ) => (
//                     <trow {...headerGroup.getHeaderGroupProps()}>
//                         {headerGroup.headers.map((column)=>{
//                             <thead {...column.getHeaderGroupProps()}>{ column.render("Header") }</thead>
//                         })}
//                     </trow>
//                 ))}
//             </thead>
//             <tbody {...getTableBodyProps()}>
//                         {rows.map((row) =>
//                         {
//                             prepareRow(row);
//                             return row.cells.map((cell, index) =>
                            
//                                 <td {...cell.getCellProps()}>
//                                     { cell.render("Cell")}   
//                                 </td>
//                             )
//                         }
//                     )}
//             </tbody>
//         </table>
//       </div>
//     )
//   }

//   export default TableList