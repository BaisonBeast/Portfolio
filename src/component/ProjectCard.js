 import React from 'react'
 import github from "../assets/icons/github.svg";
import "../css/ProjectCard.css"
import { motion } from "framer-motion"

 function ProjectCard({project: {name, image, deployed_url, github_url}}) {
 	return (
 		<div className="projectCard col-md-6 col-lg-4 my-2">
 			<motion.figure className="projectCard_wrapper"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            >
 				<a href={deployed_url} target="_blank">
 					<img src={image} alt={name} className="projectCard_image"/>
 				</a>
 				<div className="projectCard_title">
 					<a href={github_url}>
 						<img src={github} alt="github link" className="projectCard_icon"/>
 					</a>
                    {name}
 				</div>	
 			</motion.figure>
 			
 		</div>
 	)
 }
 
 export default ProjectCard