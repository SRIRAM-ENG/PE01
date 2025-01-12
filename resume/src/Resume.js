import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="content">
        <h1>Sriram Bairi</h1>
        <p>Address: Seattle Washington | Email: bairisriram@cityuniversity.edu
        | Phone: +1 123-456-7890</p>
        
        <div className="section">
          <h2>Education</h2>
          <ul className="no-bullets">
          <h4><li>Masters in Computer Science</li></h4>
            <li>City University of Seattle</li>
            <li>Pursuing Masters</li>
          </ul>
          <ul className="no-bullets">
          <h4><li>Bachelors in  Engineering</li></h4>
            <li>JNTUH</li>
            <li>2018</li>
          </ul>
        </div>

        <div className="section">
          <h2>Skills</h2>
          <ul className="no-bullets">
            <li>DevOps</li>
            <li>Python</li>
            <li>ML</li>
            <li>AI</li>
            <li>SQL</li>
            <li>CICD</li>
          </ul>
        </div>

        <div className="section">
          <h2>Work Experience</h2>
          <ul className="no-bullets">
           <h4> <li>Systems Analyst</li></h4>
            <li>ABC</li>
            <li>Jan 2018 - Sep 2022</li>
          </ul>
          <ul className="no-bullets">
          <h4><li>Student</li></h4>
            <li>City University of Seattle</li>
            <li>March 2023</li>
          </ul>
        </div>
        <div className="section">
          <h2>Work Experience</h2>
         
        </div>

        <div className="section">
          <h2>Projects</h2>
          <ul className="no-bullets">
            <li>
              <strong>Project A:</strong>Team Project
              <br />
              URL: <a href="https://github.com/cityuseattle/hos09-density-based-clustering-SRIRAM-ENG

">https://github.com/cityuseattle/hos09-density-based-clustering-SRIRAM-ENG</a>
            </li>
            
          </ul>
        </div>
      
      </div>
    </div>
  );
};

export default Resume;
