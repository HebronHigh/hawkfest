import iamhebron from './../assets/iamhebron.mp4'
import './../styles/About.css'


/**
 * functional component for the about page
 *
 * @returns html for the about page
 * @author Ethan Maher
 */
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
        </div> <br></br>
        <div classname='player-wrapper'>
          <video width='35%' controls>
            <source src={ iamhebron } type='video/mp4'/>
          </video>
        </div>
      </div>
    </>
  )
};

export default About;