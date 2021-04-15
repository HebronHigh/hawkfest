import React from 'react';
import './TextInfo.css'

/**
 * TextInfo functional component for the Credit Page
 * currently has info for
 *   * personal email
 *   * business email
 *   * phone number
 *
 * @param {*} props the prop passed for the TextInfo
 * @returns html for the given prop
 * @author Ethan Maher
 */
const TextInfo = (props) => {
  if (typeof (props.user) !== 'undefined') {
    /**
     * checks if the prop type is a personal email
     *
     * if so it will check the email service provided and add the extension
     */
    if (props.type === 'personalemail') {
      const user = props.user;
      /**
       * creates and returns a mailto: href with the email
       */
      const mailto = 'mailto:' + user
      return (
        <div className='item'>Personal Email: <a href={mailto}>{user}</a></div>
      )
    }
    /**
     * checks if the prop type is a work email
     *
     * if so it will check the email service provided and add the extension
     */
    else if (props.type === 'workemail') {
      const user = props.user;

      /**
       * creates and returns a mailto: href with the email
       */
      const mailto = 'mailto:' + user
      return (
        <div className='item'>Business Email: <a href={mailto}>{user}</a></div>
      )
    }
  } else {
    return null;
  }
}

export default TextInfo;