import React from "react";
import './Contact.css'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <>
      <div className='header'><h1> CONTACT </h1></div>
      <div className='contactContainer'>
        <ContactForm />
      </div>
    </>
	);
}

export default Contact;