import React, { useState } from "react";
import './ContactForm.css'

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}><br></br>
      <div>
        <label htmlFor="name">Name:</label>
        <br></br>
        <textarea type="text" id="name" class="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label><br></br>
        <textarea type="email" id="email" class="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label><br></br>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
  );
};

export default ContactForm;