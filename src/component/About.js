 import React from 'react';
 import Skillcard from "./Skillcard.js";
 import "../css/About.css";
 import {motion} from "framer-motion";
 import skills from "../data/AboutData.js";
 
 function About() {
    const variants ={
    hidden: {
        opacity:0
    },
    visible:{
        opacity: 1,
        transition: {
        delay: 0.2,
        duration:0.7
      }  
    }
  }
 	return (
 		<motion.div className="about"
            variants={variants}
            initial="hidden"
            animate="visible"
            >

 			<h6 className="about_title">
                 A computer science undergraduate with good conversational and analytical skills, a technology enthusiast and a team player, looking forward to learn and expertise the domain to fulfill challenging goals. 
             </h6>
             <div className="container about_container">
                 <h6 className="about_heading">Some of my skills</h6>
                 <div className="row">
                     {
                         skills.map(skill=>
                                <Skillcard skill={skill}/>
                         )
                     }
                 </div>
             </div>         
 		</motion.div>
 	)
 }
 
 export default About