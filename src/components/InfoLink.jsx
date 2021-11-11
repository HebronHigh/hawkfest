import "./../styles/InfoLink.css";

/**
 * import icons to use with this
 *
 * https://github.com/ismamz/react-bootstrap-icons/tree/master/src/icons
 */
import { Github, Instagram, Linkedin, Globe2 } from "react-bootstrap-icons";

/**
 * InfoLink functional component for the Credit Page
 * currently supports
 *   * github
 *   * linkedin
 *   * instagram
 *
 * @param {*} props the prop passed for the InfoLink
 * @returns href using a react-bootstrap icon for the media
 * @author Ethan Maher
 */
const InfoLink = (props) => {
  if (typeof props.user !== "undefined") {
    /**
     * checks if the proptype is a github username
     *
     * if so it will create a link to that github page
     */
    if (props.type === "github") {
      return (
        <a
          href={"https://github.com/" + props.user}
          target="_blank"
          rel="noreferrer"
        >
          <Github width="4vmin" size={30} />
        </a>
      );
    } else if (props.type === "linkedin") {
      /**
       * checks if the proptype is a linkedin username
       *
       * if so it will create a link to that linkedin page
       */
      return (
        <a
          href={"https://www.linkedin.com/in/" + props.user}
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin width="4vmin" size={30} />
        </a>
      );
    } else if (props.type === "website") {
      /**
       * checks if the proptype is a website
       *
       * if so it will create a link to that webpage
       */
      return (
        <a href={props.user} target="_blank" rel="noreferrer">
          <Globe2 width="4vmin" size={30} />
        </a>
      );
    } else if (props.type === "instagram") {
      /**
       * checks if the proptype is an instagram username
       *
       * if so it will create a link to that instagram page
       */
      return (
        <a
          href={"https://www.instagram.com/" + props.user}
          target="_blank"
          rel="noreferrer"
        >
          <Instagram width="4vmin" size={30} />
        </a>
      );
    }

    /**
     * to add a new prop
     */
  } else {
    return null;
  }
};

export default InfoLink;
