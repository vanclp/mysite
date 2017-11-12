import React from 'react'
import Header from '../components/Header'
import react from '../images/react.svg'
import angular from '../images/angular.svg'
import javascript from '../images/javascript.svg'
import css3 from '../images/css3.svg'
import html5 from '../images/html5.svg'
import csharp from '../images/csharp.png'

const ResumeContainer = () => (
  <div className="resume">
  <Header />
    <h1 className="title">Key Points</h1>
    <h2>Experience</h2>
    <ul className="experience-list">
      <li className="experience">
        <h3>Lotus Labs Inc. - Web Developer</h3>
        <h4>August 2017 - Present</h4>
      </li>
      <li className="experience">
        <h3>Hewlett Packard/ HPE/ DXC - Service Information Developer</h3>
        <h4>August 2014 - August 2017</h4>
      </li>
      <li className="experience">
        <h3>Texas Instruments Philippines Inc. - Application Developer</h3>
        <h4>November 2012 - August 2014</h4>
      </li>
    </ul>
    <h2>Technical Skills</h2>
    <ul className="skill-list">
    <li className="skill">
        <img src={csharp}  alt="c#"/>
      </li>
      <li className="skill">
        <img src={react} alt="reactjs"/>
      </li>
      <li className="skill">
        <img src={angular} alt="angularjs"/>
      </li>
      <li className="skill">
        <img src={javascript} alt="javascript"/>
      </li>
      <li className="skill">
        <img src={html5} alt="html5"/>
      </li>
      <li className="skill">
        <img src={css3} alt="css3"/>
      </li>
    </ul>
    <h2>Education</h2>
    <ul>
      <li>
        <h3>Saint Louis University</h3>
        <h4>Bachelor of Science in Information Technology, Cum Laude</h4>
        <h5>2008 - 2012</h5>
      </li>
    </ul>
    <h2>Certification</h2>
    <ul>
      <li>
        <h3>Udacity React Nano Degree</h3>
        <h5>October 2017</h5>
      </li>
    </ul>
  </div>
)

export default ResumeContainer
