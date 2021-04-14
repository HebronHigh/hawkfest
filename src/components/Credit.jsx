import React from 'react';
import Contributor from './Contributor'
import './Credit.css'
const Credit = () => {
  return (
    <>
      <div className='header'><h1> CREDIT </h1></div>
      <div className='creditPageText'>
        The information on each country page was compiled by students at feeder schools to Hebron High School.<br /><br />
        The website was built by the students listed below.
      </div>
      <div className='creditsContainer'>
          <div className='contributor'>
            <Contributor
              name='Ethan Maher'
              imageSource='/img/saitama.jpg'
              githubName='randompwner'
              linkedinName='ethan-maher'
              personalemail='ethanamaher@gmail.com'
              workemail='eam200004@utdallas.edu'
              website = 'https://randompwner.github.io'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Matthew Sheldon'
              imageSource='/img/saitama.jpg'
              githubName='Punchwood2003'
              linkedinName='matthew-sheldon-280812200'
              personalemail='punchwood2003@gmail.com'
              workemail='matthewtsheldon@gmail.com'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Tyler Kerch'
              imageSource='/img/saitama.jpg'
              linkedinName='tyler-kerch-87b811200'
              instagramName='tylerkerch'
              personalemail='kerchtc@gmail.com'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Janine Jimenez'
              imageSource='/img/saitama.jpg'
              githubName='jsjimenezdotcom'
              linkedinName='janine-jimenez-172152201'
              workemail='jimenezj2@go.lisd.net'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Rayyan Waris'
              imageSource='/img/saitama.jpg'
              linkedinName='rayyan-waris-b6821020b'
              instagramName='raywa04'
              workemail='warisr@go.lisd.net'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Sanjitha Venkata'
              imageSource='/img/saitama.jpg'
              linkedinName='sanjitha-venkata-843404209'
              personalemail='sanjithavv@gmail.com'
            />
          </div>
      </div>
    </>
  )
};

export default Credit;