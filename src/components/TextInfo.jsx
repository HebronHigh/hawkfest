import './../styles/TextInfo.css'

/**
 * TextInfo functional component for the Credit Page
 * currently has info for
 *   * email
 *
 * @param {*} props the prop passed for the TextInfo
 * @returns html for the given prop
 * @author Ethan Maher
 */
const TextInfo = (props) => {
  if (typeof (props.user) !== 'undefined') {
    /**
     * checks if the prop type is an email
     *
     * if so it will check the email service provided and add the extension
     */
    if (props.type === 'email') {
      const user = props.user;

      /**
       * creates and returns a mailto: href with the email
       */
      const mailto = 'mailto:' + user
      return (
        <div className='item'>Email: <a href={mailto}>{user}</a></div>
      )
    }
  } else {
    return null;
  }
}

export default TextInfo;