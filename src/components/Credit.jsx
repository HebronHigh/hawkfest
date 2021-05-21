import Contributor from './Contributor'

import './../styles/Credit.css'

/**
 * functional component for the credit page
 *
 * @returns html for the credit page
 * @author Ethan Maher
 */
const Credit = () => {
  return (
    <>
      <div className='header'><h1> CREDIT </h1></div>
      <div className='creditPageTextLarge'>
        The information on each country page was provided by the Hebron High feeder schools.
      </div>
      <div className='creditPageTextSmall'>
        This website was designed and built by the following Hebron students. The source code can be found <a className='sourcecode' href='https://github.com/HebronHigh/hawkfest' rel='noreferrer' target="_blank">here</a>.
      </div>
      <div className='creditsContainer'>
          <div className='contributor'>
            <Contributor
              name='Ethan Maher'
              imageSource='/img/ethan.jpg'
              githubName='deepspacerailgun'
              linkedinName='ethan-maher'
              email='ethanamaher@gmail.com'
              website = 'https://deepspacerailgun.github.io'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Matthew Sheldon'
              imageSource='/img/matthew.jpg'
              githubName='Punchwood2003'
              linkedinName='matthew-sheldon-280812200'
              email='matthewtsheldon@gmail.com'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Tyler Kerch'
              imageSource='/img/tyler.jpg'
              linkedinName='tyler-kerch-87b811200'
              instagramName='tylerkerch'
              email='kerchtc@gmail.com'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Janine Jimenez'
              imageSource='/img/janine.jpg'
              githubName='JSJ9'
              linkedinName='janine-jimenez-172152201'
              email='jimenezj2@go.lisd.net'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Rayyan Waris'
              imageSource='/img/rayyan.jpg'
              linkedinName='rayyan-waris-b6821020b'
              instagramName='raywa04'
              email='warisr@go.lisd.net'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Sanjitha Venkata'
              imageSource='/img/sanjitha.jpg'
              linkedinName='sanjitha-venkata-843404209'
              email='sanjithavv@gmail.com'
            />
          </div>
      </div>
    </>
  )
};

export default Credit;
