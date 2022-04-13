import '../styles/about.css';
import { FaGithub, FaLinkedin, FaParagraph } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation} from "react-icons/go";
import { BsFillPhoneVibrateFill } from "react-icons/bs";

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
            <p><GoLocation />: {location}</p>
            <p><AiOutlineMail />: {email}</p>
            <p><BsFillPhoneVibrateFill /> :{cell}</p>
            <p>< FaGithub />: {github}</p>
            <p>< FaLinkedin />: {linkedin}</p>
            <p><FaParagraph />: {introduction}</p>
            <div className= "footer-github-link">
            <p>< FaGithub />: {github}</p>
            </div>
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
