import React from "react";
import "../css/Sidebar.css"
import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import github from '../assets/icons/github.svg';
import tie from '../assets/icons/tie.svg';
import pin from '../assets/icons/pin.svg';
import mightycoder from '../assets/mightycoder.svg';
import resume from "../assets/resume.pdf"
import {motion} from "framer-motion"

function Sidebar(){

  const variants ={
    hidden: {
      x: "-10vw"
    },
    visible:{
        x: 0,
        transition: {
        dealy: 0.1,
        duration:1.5,
        type: "spring" 
      }  
    }
  }

  return(

    <motion.div className="sidebar"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
        <img src={mightycoder} alt="avatar" className="sidebar_avatar"/>
        <div className="sidebar_name">Priyanshu <span>suman</span></div>
          <div className="sidebar_item sidebar_title"><u>Coding Enthusiast</u></div>
          <div className="sidebar_contact">
          <a href={resume} download="resume.pdf">
            <div className="sidebar_item">
              <img src={tie} alt="resume" className="sidebar_icon sidebar_resume mr-3"/>Download Resume
            </div>
          </a>
          <div className="sidebar_item">
              <a href="https://github.com/BaisonBeast" target="blank"><img src={github} alt="github" className="sidebar_icon sidebar_github mr-3" />Github</a>
           </div>
          <figure className="sidebar_social-icon my-2">
            <a href="#"><img src={facebook} alt="facebook" className="sidebar_icon mr-3"/></a>
            <a href="#"><img src={instagram} alt="instagram" className="sidebar_icon"/></a>
          </figure>
            <div className="sidebar_item">{'Atulatul6666@gmail.com'}</div>
            <div className="sidebar_item">6284904970</div>
            <div className="sidebar_location">
              <img src={pin} alt="Location" className="sidebar_icon mr-3"/>
              Gujarat, India
            </div>
         
        </div>
         <div className="sidebar_item sidebar_email" onClick={()=>window.open("mailto:atulatul6666@gmail.com")}>
           Email me
         </div>
    </motion.div>
  );

}

export default Sidebar;
