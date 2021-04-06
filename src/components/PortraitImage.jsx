import React from 'react';
import './PortraitImage.css'

const ImagePortait = (props) => {
  const path = props.location;
  console.log(path)
  return (
    <img className='profilepicture' src={process.env.PUBLIC_URL + path} alt=''></img>
  )
}

export default ImagePortait;