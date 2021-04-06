import React from 'react';
import './InfoLink.css'
import { Github, Instagram, Linkedin } from 'react-bootstrap-icons'

const InfoLink = (props) => {
  if (typeof(props.user) !== 'undefined') {
    if (props.type === 'github') {
      const link = 'https://github.com/' + props.user;
      return (
        <a href={link} target='_blank' rel='noreferrer'>
          <Github width='40px' size={30} />
        </a>
      )
    } else if (props.type === 'linkedin') {
      const link = 'https://www.linkedin.com/in/' + props.user;
      return (
        <a href={link} target='_blank' rel='noreferrer'>
          <Linkedin width='40px' size={30} />
        </a>
      )
    } else if (props.type === 'instagram') {
      const link = 'https://www.instagram.com/' + props.user;
      return (
        <a href={link} target='_blank' rel='noreferrer'>
          <Instagram width='40px' size={30} />
        </a>
      )
    }
  } else {
    return null;
  }
}

export default InfoLink;