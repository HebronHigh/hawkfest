import React from 'react';
import InfoLink from './InfoLink'
import TextInfo from './TextInfo'
import PortraitImage from './PortraitImage'
import './Contributor.css'

const Contributor = (props) => {

  /**
   * for textinfo and infolinks make sure you change the user prop
   * currently they check if user is undefined to add something
   */
  return (
    <div className = 'contribContainer'>
      <div className='photo'>
        <PortraitImage location={props.imageSource} />
      </div>

      <div className='info'>
        <div className='userinfo-name'>
          {props.name}
        </div>

        <div className='textinfo'>
          <TextInfo type='phonenumber' user={props.phonenumber} />
          <TextInfo type='personalemail' user={props.personalemail}/>
          <TextInfo type='workemail' user={props.workemail}/>
        </div>

        <div className='infolinks'>
          <InfoLink type='github' user={props.githubName} />
          <InfoLink type='linkedin' user={props.linkedinName} />
          <InfoLink type='website' user={props.website} />
          <InfoLink type='instagram' user={props.instagramName} />
        </div>
      </div>
    </div>
  )
}

export default Contributor;