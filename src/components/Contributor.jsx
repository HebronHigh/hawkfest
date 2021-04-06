import React from 'react';
import InfoLink from './InfoLink'
import TextInfo from './TextInfo'
import './Contributor.css'

const Contributor = (props) => {
  return (
    <div className = 'contribContainer'>
      <div className='userinfo'>
        <div className='userinfo-name'>
          {props.name}
        </div>

        <div className='textinfo'>
          <TextInfo type='personalemail' user={props.personalemail} />
          <TextInfo type='workemail' user={props.workemail} />
          <TextInfo type='schoolemail' user={props.schoolemail} />
        </div>

        <div className='infolinks'>
          <InfoLink type='github' user={props.githubName} />
          <InfoLink type='linkedin' user={props.linkedinName} />
          <InfoLink type='instagram' user={props.instagramName} />
        </div>
      </div>
    </div>
  )
}

export default Contributor;