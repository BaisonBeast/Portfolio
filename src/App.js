import React from "react";
import Navbar from "./component/Navbar";
import Sidebar from './component/Sidebar.js';
import "./css/index.css";
import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import About from "./component/About";
import Resume from "./component/Resume";
import Project from "./component/Project";

function App() {
  return (
    
     <div className="app">
      <div className="container app_container">
        <div className="row app_row">
          <div className="col-lg-3">
            <Sidebar />
          </div>
          <div className="col-lg-9 app_main-content">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<About />}></Route>
                <Route exact path="/resume" element={<Resume />}></Route>
                <Route exact path="/project" element={<Project />}></Route>
            </Routes>
          </div>
        </div>
      </div>
     </div>
    
  );
}

export default App;
