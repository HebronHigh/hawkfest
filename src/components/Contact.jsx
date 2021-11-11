import "./../styles/Contact.css";

/**
 * functional component for the contact page
 *
 * @returns html for the contact page
 * @author Ethan Maher
 */

const liaisons = [
  { name: "Dr. Vanessa Zavar", email: "zavarv@lisd.net" },
  { name: "Dr. Jacob Garlinger", email: "garlingerj@lisd.net" },
];

const web_design = [{ name: "Mr. Jared Stites", email: "stitesj@lisd.net" }];

function emailList(array) {
  return (
    <>
      {array.map(({ name, email }) => (
        <div className="contactText">
          {name}: <a href={"mailto:" + email}>{email}</a>
        </div>
      ))}
    </>
  );
}

const Contact = () => {
  /*
  To add more contacts make more consts for their emails
  And add them to their respective categories
   */
  return (
    <>
      <div className="header">
        <h1> CONTACT </h1>
      </div>
      <div className="contactContainer">
        <div className="contactTextHeader">HawkFest Content Liaisons</div>
        {emailList(liaisons)}
        <div className="contactTextHeader">Website Design</div>
        {emailList(web_design)}
      </div>
    </>
  );
};

export default Contact;
