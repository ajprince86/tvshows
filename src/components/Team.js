function Team (props) {
    // Destructuring

    console.log(props)
    console.log(JSON.stringify(props.teamData.name.first));
    // const {name, location, email, cell , github, linkedin, introduction} = props.team
    
    // console.log(name);
    return (
        <>
        <h1> Team info</h1>
        {/* <p>name: {JSON.stringify(props.teamData.name.title)} {JSON.stringify(props.teamData.name.first)} {JSON.stringify(props.teamData.name.last)}</p> */}
        <p>location: {props.teamData.location}</p>
        <p>email: {props.teamData.email}</p>
        <p>cell: {props.teamData.cell}</p>
        <p> github: {props.teamData.github}</p>
        <p> linkedin: {props.teamData.linkedin}</p>
        <p> introduction: {props.teamData.introduction}</p>
        </>
    )
}

export default Team;

// "name": {
//     "title": "Ms.",
//     "first": "Ajitha",
//     "last": "Anandapu"
//   },
//   "location": "New Jersey",
//   "email": "ajitha@example.com",
//   "cell": "(346)573-6314",
//   "github": "",
//   "linkedin": "" ,
//   "introduction": "Ajitha is senior software engineer" 