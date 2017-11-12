import React from 'react'
import FA from 'react-fontawesome'

const Sidebar = () => (
  <div className="sidebar">
    <h4> Check me out! </h4>
    <ul className="contact-list">
      <li className="contact-item">
        <a href="https://github.com/vanclp">
          <FA name="github" size="lg" />
        </a>
      </li>
      <li className="contact-item">
        <a href="https://www.linkedin.com/in/iclposadas/">
          <FA name="linkedin" size="lg" />
        </a>
      </li>
      <li className="contact-item">
        <a href="https://twitter.com/vanclp">
          <FA name="twitter" size="lg" />
        </a>
      </li>
      <li className="contact-item">
        <a href="https://instagram.com/vanclp">
          <FA name="instagram" size="lg" />
        </a>
      </li>
      <li className="contact-item">
        <a href="mailto:me@vanclp.com">
          <FA name="envelope-o" size="lg" />
        </a>
      </li>
    </ul>
    <span>&copy; vanclp {new Date().getFullYear()}</span>
  </div>
)

export default Sidebar
