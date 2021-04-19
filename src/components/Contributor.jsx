import InfoLink from './InfoLink'
import TextInfo from './TextInfo'

import './../styles/Contributor.css'


/**
 * functional component for profile pictures on the credit page
 *
 * @param {*} props the image path
 * @returns html for the profile picture
 *
 * @author Ethan Maher
 */
const PortraitImage = (props) => {
  const path = props.location;
  return (
    <img src={process.env.PUBLIC_URL + path} alt='' class='rounded'/>
  )
}

/**
 * functional component for Contributors
 *
 * @param {*} props props for the contributor
 * @returns html for the contributor
 * @author Ethan Maher
 */
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
          <TextInfo type='email' user={props.email}/>
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