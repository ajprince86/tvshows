import '../styles/about.css'

function Team (props) {
    // Destructuring


    console.log(props)
    console.log(JSON.stringify(props.teamData.name.first));
    // const {name, location, email, cell , github, linkedin, introduction} = props.team
    
    // console.log(name);
   

    const {name, location, email, cell , github, linkedin, introduction} = props.teamData
   //const {first, title, last } = name
  
    return (
        <div className="team-div">
          {/* <h1> Team Mate</h1> */}
            <p className='team-p-name'>{name.title} {name.first} {name.last} </p>
            <p>{location}</p>
            <p>{email}</p>
            <p>{cell}</p>
            <p>{github}</p>
            <p>{linkedin}</p>
            <p>{introduction}</p>
        </div>
    )
}

export default Team;



//  return (
//         <>
//         <h1> Team info</h1>
//         {/* <p>name: {JSON.stringify(props.teamData.name.title)} {JSON.stringify(props.teamData.name.first)} {JSON.stringify(props.teamData.name.last)}</p> */}
//         <p>location: {props.teamData.location}</p>
//         <p>email: {props.teamData.email}</p>
//         <p>cell: {props.teamData.cell}</p>
//         <p> github: {props.teamData.github}</p>
//         <p> linkedin: {props.teamData.linkedin}</p>
//         <p> introduction: {props.teamData.introduction}</p>
