import React from 'react';
import './PortraitImage.css'

const ImagePortait = (props) => {
  const path = props.location;
  return (
    <img src={process.env.PUBLIC_URL + path} alt='' class='rounded'/>
  )
}

export default ImagePortait;