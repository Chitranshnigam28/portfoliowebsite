import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div>
      <div className="contactWrapper">
        <h2>Get in touch</h2>
        <div className="contactLinks">
        <a href="mailto:nigamchitransh208@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size='2x'/>
        </a>
        <a href="https://www.linkedin.com/in/chitransh-nigam/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} size='2x'/>
        </a>
        <a href="https://github.com/Chitranshnigam28" target="_blank">
          <FontAwesomeIcon icon={faGithub} size='2x'/>
        </a>
        </div>
      </div>
     
    </div>
  )
}

export default Footer