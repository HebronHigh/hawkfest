import React from 'react';
import './TextInfo.css'

const TextInfo = (props) => {
  if (typeof (props.user) !== 'undefined') {


    if (props.type === 'personalemail') {
      const user = props.user;
      const service = props.service;
      let email = ''
      if (service === 'google') {
        email = user + '@gmail.com';
      } else if (service === 'lisd') {
        email = user + '@go.lisd.net';
      } else if (service === 'utdallas') {
        email = user + '@utdallas.edu';
      }
      const mailto = 'mailto:' + email
      return (
        <div className='item'>Personal Email: <a href={mailto}>{email}</a></div>
      )
    } else if (props.type === 'workemail') {
      const user = props.user;
      const service = props.service;
      let email = '';

      if (service === 'google') {
        email = user + '@gmail.com';
      } else if (service === 'lisd') {
        email = user + '@go.lisd.net';
      } else if (service === 'utdallas') {
        email = user + '@utdallas.edu';
      }

      const mailto = 'mailto:' + email
      return (
        <div className='item'>Business Email: <a href={mailto}>{email}</a></div>
      )
    } else if (props.type === 'phonenumber') {
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