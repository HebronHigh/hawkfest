import React from 'react';
import Contributor from './Contributor'
import './Credit.css'
const Credit = () => {
  return (
    <>
      <h1> Credit </h1>
      <div className='creditsContainer'>
          <div className='contributor'>
            <Contributor
              name='Ethan Maher'
              githubName='randompwner'
              linkedinName='ethan-maher'
              personalemail='ethanamaher'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Matthew Sheldon'
              githubName='Punchwood2003'
              linkedinName='matthew-sheldon-280812200'
              phonenumber='469-430-7144'
              personalemail='punchwood2003'
              workemail='matthewtsheldon'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Tyler Kerch'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Janine Jimenez'
              githubName='jsjimenezdotcom'
              linkedinName='janine-jimenez-172152201'
              schoolemail='jimenezj2'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Rayyan Waris'
              linkedinName='rayyan-waris-b6821020b'
              instagramName='raywa04'
              schoolemail='warisr'
            />
          </div>

          <div className='contributor'>
            <Contributor
              name='Sanjitha Venkata'
            />
          </div>

      </div>
    </>
  )
};

export default Credit;