import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const ProfileContainer = () => (
  <div className="profile">
    <Header/>
    <div className="container">
      <Sidebar />
      <div id="content" className="content container column">
        <p>I came from the City of Pines</p>
        <p>I live in Taguig City</p>
        <p>I watch a lot of tv series</p>
        <p>
          I work as a developer, some <strong>web</strong>, some{' '}
          <strong>mobile</strong>, some all around
        </p>
        <p>I love to learn new tech thingies</p>
        <p>
          I was as a dev support at <strong>Texas Instruments Inc.</strong>
        </p>
        <p>
          I then worked for <strong>HP</strong>/<strong>HPE</strong>/<strong>DXC</strong>
        </p>
        <p>
          I worked with the Microsoft Practice Team involved in Microsoft Stack
          of Technologies
        </p>
        <p>I am now a developer at Lotus Labs Inc. </p>
        <p>
          I made a somewhat resume{' '}
          <Link to="/resume">
            <em>"here"</em>
          </Link>{' '}
          if you prefer those things
        </p>
      </div>
    </div>
  </div>
)

export default ProfileContainer
