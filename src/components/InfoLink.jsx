import React from 'react';
import './InfoLink.css'
import { Github, Instagram, Linkedin, Globe2 } from 'react-bootstrap-icons'

/**
 * InfoLink functional component for the Credit Page
 * currently supports
 *   * github
 *   * linkedin
 *   * instagram
 *
 * @param {*} props the prop passed for the InfoLink
 * @returns href using a react-bootstrap icon for the media
 *
 * @author Ethan Maher
 */
const InfoLink = (props) => {
  if (typeof (props.user) !== 'undefined') {
    /**
     * checks if the proptype is a github username
     *
     * if so it will create a link to that github page
     */
    if (props.type === 'github') {
      const link = 'https://github.com/' + props.user;
      return (
        <a href={link} target='_blank' rel='noreferrer'>
          <Github width='40px' size={30} />
        </a>
      )
    }
    /**
     * checks if the proptype is a linkedin username
     *
     * if so it will create a link to that linkedin page
     */
    else if (props.type === 'linkedin') {
      const link = 'https://www.linkedin.com/in/' + props.user;
      return (
        <a href={link} target='_blank' rel='noreferrer'>
          <Linkedin width='40px' size={30} />
        </a>
      )
    }
    /**
     * checks if the proptype is a website
     *
     * if so it will create a link to that webpage
     */
    else if (props.type === 'website') {
      const link = props.user;

      return (
        <a href={link} target='_blank' rel='noreferrer'>
          <Globe2 width='40px' size={30} />
        </a>
      )
    }
    /**
     * checks if the proptype is an instagram username
     *
     * if so it will create a link to that instagram page
     */
    else if (props.type === 'instagram') {
      const link = 'https://www.instagram.com/' + props.user;
      return (
        <a href={link} target='_blank' rel='noreferrer'>
          <Instagram width='40px' size={30} />
        </a>
      )
    }

    /**
     * to add a new prop
     */
  } else {
    return null;
  }
}

export default InfoLink;