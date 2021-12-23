import React from 'react';
import Bar from "./Bar.js";
import "../css/Resume.css";
import {motion} from "framer-motion";
import {languages, tools} from "../data/ResumeData.js";


function Resume() {
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
		<motion.div className=" container resume"
		variants={variants}
            initial="hidden"
            animate="visible"
            >
			 <div className="row">
			 	<div className="col-lg-6 resume-card">
			 		<h4 className="resume-card_heading">
 						Education
			 		</h4>
			 		<div className="resume-card_body">
			 			<h5 className="resume-card_title">
			 				Computer Science Engineering
			 			</h5>
			 			<p className="resume-card_name">
			 				Lovely Professional University
			 			</p>
			 			<p className="resume-card_details">
			 				10th: 8.8 CGPA<br />
			 				12th: 83 Percent<br />
			 				B.Tech: 7.89 CGPA<br />
			 			</p>
			 		</div>
			 	</div>
			 
			 	<div className="col-lg-6 resume-card">
			 		<h4 className="resume-card_heading">
 						Experience
			 		</h4>
			 		<div className="resume-card_body">
			 			<h5 className="resume-card_title">
			 				Intern
			 			</h5>
			 			<p className="resume-card_name">
			 				Geeks for Geeks content writer
			 			</p>
			 			<p className="resume-card_details">
			 				Worked as a Geeks for Geeks content writer inter. And wrote 20 articles about different web technologies and new softwares.
			 			</p>
			 		</div>
			 	</div>
			 </div>

			 <div className="row">
			 	<div className="col-lg-6 resume-language">
			 		<h5 className="resume-language_heading">
			 			Language Heading
			 		</h5>
			 		<div className="resume-language_body mt-3">
			 			{
			 				languages.map(language =>
			 					<Bar value={language} />
			 				)
			 			}
			 		</div> 
			 	</div>

			 	<div className="col-lg-6 resume-language">
			 		<h5 className="resume-language_heading">
			 			Tools & design
			 		</h5>
			 		<div className="resume-language_body mt-3">
			 			{
			 				tools.map(tool=>
			 					<Bar value={tool} />
			 				)
			 			}
			 		</div> 
			 	</div>
			 </div>

		</motion.div>
	)
}

export default Resume