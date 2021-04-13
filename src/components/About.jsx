import React from 'react';
import './About.css'

const About = () => {
  return (
    <>
      <div className='header'><h1> ABOUT </h1></div>
      <div className='aboutContainer'>
        <div className='aboutText'>
          Welcome to Hebron HawkFest, a celebration of our school's unique culture and diversity.
        </div>
        <div className='aboutText'>
          <strong>Culture (n.):</strong> the shared values, beliefs, traditions, and customs that a group of people who teach to and learn from others
        </div>
        <div className='aboutText'>
          Our community has assembled a gallery of what we believe makes Hebron's culture so vibrant and special - from our students' passions and interests to their heritage and traditions. We hope you take the time to explore all Hebron has to offer and connect with what each student has contributed!
        </div>
      </div>
    </>
  )
};

export default About;