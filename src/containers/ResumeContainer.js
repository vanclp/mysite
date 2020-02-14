import React from 'react'
import Header from '../components/Header'
import { Icon } from '@iconify/react';
import kube from '@iconify/icons-logos/kubernetes';
import azure from '@iconify/icons-logos/azure';
import docker from '@iconify/icons-logos/docker';
import aws from '@iconify/icons-logos/aws';
import go from '@iconify/icons-logos/go';
import javascript from '@iconify/icons-logos/javascript';
import csharp from '@iconify/icons-logos/c-sharp';
import htlm5 from '@iconify/icons-logos/html-5';
import git from '@iconify/icons-logos/git-icon';

const ResumeContainer = () => (
  <div className="resume">
    <Header />
    <h1 className="title">Key Points</h1>
    <h2>Experience</h2>
    <ul className="experience-list">
      <li className="experience">
        <h3>ING - DevOps Engineer</h3>
        <h4>May 2019 - Present</h4>
      </li>
      <li className="experience">
        <h3>Infor - Software Engineer</h3>
        <h4>January 2018 - April 2019</h4>
      </li>
      <li className="experience">
        <h3>Lotus Labs Inc. - Front End Web Developer</h3>
        <h4>August 2017 - January 2018</h4>
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
        <Icon icon={azure} height={70}  />
      </li>
      <li className="skill">
        <Icon icon={aws} height={70} />
      </li>
      <li className="skill">
        <Icon icon={kube} height={70} />
      </li>
      <li className="skill">
        <Icon icon={docker} height={70} />
      </li>
      <li className="skill">
        <Icon icon={go} height={70} />
      </li>
      <li className="skill">
        <Icon icon={csharp} height={70} />
      </li>
      <li className="skill">
        <Icon icon={javascript} height={70} />
      </li>
      <li className="skill">
        <Icon icon={htlm5} height={70} />
      </li>
      <li className="skill">
        <Icon icon={git} height={70} />
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
    <ul className="certification-list">
      <li className="certification">
        <h3><a target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/2f435428-0bdf-4c66-b544-109678975d6d/linked_in_profile">CKAD - Certified Kubernetes Application Developer</a></h3>
        <h5>February 2020</h5>
      </li>
      <li className="certification">
        <h3><a target="_blank" rel="noopener noreferrer" href="https://www.certmetrics.com/amazon/public/badge.aspx?i=9&t=c&d=2019-01-28&ci=AWS00561093">AWS Cloud Practitioner</a></h3>
        <h5>January 2019</h5>
      </li>
      <li className="certification">
        <h3>Udacity React Nano Degree</h3>
        <h5>October 2017</h5>
      </li>
    </ul>
  </div>
)

export default ResumeContainer
