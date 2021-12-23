import React, {useState, useEffect} from 'react'
import "../css/Navbar.css";
import {Link} from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {

	const [active, setActive]= useState('About');

	useEffect(() => {
        let currentURL = window.location.href
        if (currentURL.endsWith('/'))
            setActive('About');
        else if (currentURL.endsWith('/project'))
            setActive('Project')
        else if (currentURL.endsWith('/resume'))
            setActive('Resume')

    }, [active]);

		const variants = {
		  visible: { opacity: 1, 
					transition: {
			        dealy: 0.1,
			        duration:1.5,
			        type: "spring" 
			        }
	            },
		  hidden: { opacity: 0 },
		}

	return (
		<motion.div className="navbar"
			 initial="hidden"
			  animate="visible"
			  variants={variants}
		>
			<div className="navbar_active">
				{active}
			</div>
			<div className="navbar_items">

				<Link to="/">
					{active!=="About"?<div className="navbar_item" onClick={()=>setActive('About')}>About</div>:null}
				</Link>

				<Link to="/resume">
					{active!=="Resume"?<div className="navbar_item" onClick={()=>setActive('Resume')}>Resume</div>:null}
				</Link>

				<Link to="/project">
					{active!=="Project"?<div className="navbar_item" onClick={()=>setActive('Project')}>Project</div>:null}
				</Link>

			</div>		
			
		</motion.div>
	)
}

export default Navbar