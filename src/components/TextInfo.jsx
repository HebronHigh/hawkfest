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
 *
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
      const service = props.service;
      let email = ''

      /**
       * to add a service add a new case for that provider
       *
       * defaults to an {@gmail.com} extension if one is not given
       */
      switch (service) {
        case 'google':
          email = user + '@gmail.com'; break;
        case 'lisd':
          email = user + '@go.lisd.net'; break;
        case 'utdallas':
          email = user + '@utdallas.edu'; break;
        default:
          email = user + '@gmail.com';
      }

      /**
       * creates and returns a mailto: href with the email
       */
      const mailto = 'mailto:' + email
      return (
        <div className='item'>Personal Email: <a href={mailto}>{email}</a></div>
      )
    }
    /**
     * checks if the prop type is a work email
     *
     * if so it will check the email service provided and add the extension
     */
    else if (props.type === 'workemail') {
      const user = props.user;
      const service = props.service;
      let email = '';

      /**
       * to add a service add a new case for that provider
       *
       * defaults to an {@gmail.com} extension if one is not given
       */
      switch (service) {
        case 'google':
          email = user + '@gmail.com'; break;
        case 'lisd':
          email = user + '@go.lisd.net'; break;
        case 'utdallas':
          email = user + '@utdallas.edu'; break;
        default:
          email = user + '@gmail.com';
      }

      /**
       * creates and returns a mailto: href with the email
       */
      const mailto = 'mailto:' + email
      return (
        <div className='item'>Business Email: <a href={mailto}>{email}</a></div>
      )
    }
    /**
     * checks if the prop type is a phone number
     *
     * if so it will return an item div
     */
    else if (props.type === 'phonenumber') {
      const phone = props.user
      return (
        <div className='item'>Phone Number: {phone}</div>
      )
    }
  } else {
    return null;
  }
}

export default TextInfo;