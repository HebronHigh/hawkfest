import React from 'react';
import './PortraitImage.css'

const ImagePortait = (props) => {
  const path = props.location;
  return (
    <img className='profilepicture' src={process.env.PUBLIC_URL + path} alt=''></img>
  )
}

export default ImagePortait;