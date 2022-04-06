function Team (props) {
    // Destructuring
    const {name, location, email, cell , github, linkedin, introduction} = props.team
    return (
        <>
        <h1> Team info</h1>
        <p>name: {name.title} {name.first} {name.last}</p>
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