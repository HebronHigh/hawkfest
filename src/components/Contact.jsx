import React from "react";
import './Contact.css'

const Contact = () => {
  const zavarEmail = 'mailto:zavarv@lisd.net';
  const garlingerEmail = 'mailto:garlingerj@lisd.net';
  const stitesEmail = 'mailto:stitesj@lisd.net';
  return (
    <>
      <div className='header'><h1> CONTACT </h1></div>
      <div className='contactContainer'>
        <div className='contactTextHeader'>
          HawkFest Committee
        </div>
        <div className='contactText'>
          Dr. Vanessa Zavar: <a href={zavarEmail}>{zavarEmail.split(':')[1]}</a>
        </div>
        <div className='contactText'>
          Dr. Jacob Garlinger: <a href={garlingerEmail}>{garlingerEmail.split(':')[1]}</a>
        </div>
        <div className='contactTextHeader'>
          Website Design
        </div>
        <div className='contactText'>
          Mr. Jared Stites: <a href={stitesEmail}>{stitesEmail.split(':')[1]}</a>
        </div>
      </div>
    </>
	);
}

export default Contact;