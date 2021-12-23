import React,{useState} from 'react'
import projectDatas from "../data/ProjectData";
import ProjectCard from "./ProjectCard";
import "../css/Project.css";
import {motion} from "framer-motion";

 function Project() {

    const [projects, setProjects]=useState(projectDatas);

    const handleFilterCategory=(name)=>{
        const new_array=projectDatas.filter(project => project.category.includes(name));
        setProjects(new_array);
    }

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
        <motion.div className="container project"
            variants={variants}
            initial="hidden"
            animate="visible"
        >
            <div className="project_navbar">
                <div onClick={ () =>setProjects(projectDatas)}>All</div>
                <div onClick={ () => handleFilterCategory('react')}>React</div>
                <div onClick={ () => handleFilterCategory('mongoDB')} >MongoDB</div>
                <div onClick={ () => handleFilterCategory('node.js')} >Node</div>
                <div onClick={ () => handleFilterCategory('vanilla')} >Vanila</div>
            </div>  
            <div className="row"
                animate={"open"}
                variants={variants}
            >
                {
                    projects.map(projectData=>
                        <ProjectCard key={projectData.name} project={projectData} />
                )}
            </div>
        </motion.div>
 	)
 }
 
 export default Project