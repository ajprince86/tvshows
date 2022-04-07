function Team (props) {
    // Destructuring
    const {name, location, email, cell , github, linkedin, introduction} = props.teamData
   //const {first, title, last } = name
  
    return (
        <>
        <h1> Team Mate</h1>
        <p>name: {name.title} {name.first} {name.last} </p>
        <p>location: {location}</p>
        <p>email: {email}</p>
        <p>cell: {cell}</p>
        <p> github: {github}</p>
        <p> linkedin: {linkedin}</p>
        <p> introduction: {introduction}</p>
        </>
    )
}

export default Team;
