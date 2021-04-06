import React from 'react';
import './TextInfo.css'

const TextInfo = (props) => {
  if (typeof (props.user) !== 'undefined') {
    if (props.type === 'personalemail') {
      const email = props.user + '@gmail.com'
      const mailto = 'mailto:' + email
      return (
        <div className='item'>Personal Email: <a href={mailto}>{email}</a></div>
      )
    } else if (props.type === 'workemail') {
      const email = props.user + '@gmail.com'
      const mailto = 'mailto:' + email
      return (
        <div className='item'>Work Email: <a href={mailto}>{email}</a></div>
      )
    } else if (props.type === 'schoolemail') {
      const email = props.user + '@go.lisd.net'
      const mailto = 'mailto:' + email
      return (
        <div className='item'>Work Email: <a href={mailto}>{email}</a></div>
      )
    }
  } else {
    return null;
  }
}

export default TextInfo;