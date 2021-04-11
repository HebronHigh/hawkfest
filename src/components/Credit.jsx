import React from 'react';
import Contributor from './Contributor'
import './Credit.css'
const Credit = () => {
  return (
    <div className='creditPage'>
      <div className='header'><h1> CREDIT </h1></div>
      <div className='creditsContainer'>
          <div className='contributor'>
            <Contributor
              name='Ethan Maher'
              imageSource='/img/saitama.jpg'
              githubName='randompwner'
              linkedinName='ethan-maher'
              personalemail='ethanamaher'
              personalservice='google'
              workemail='eam200004'
              workservice='utdallas'
            />
          </div>

          <div className='contributor'>
            <Contributor
            name='Matthew Sheldon'
            imageSource='/img/saitama.jpg'
              githubName='Punchwood2003'
              linkedinName='matthew-sheldon-280812200'
              personalemail='punchwood2003'
              personalservice='google'
              workemail='matthewtsheldon'
              workservice='google'
            />
          </div>

          <div className='contributor'>
            <Contributor
            name='Tyler Kerch'
            imageSource='/img/saitama.jpg'
            />
          </div>

          <div className='contributor'>
            <Contributor
            name='Janine Jimenez'
            imageSource='/img/saitama.jpg'
              githubName='jsjimenezdotcom'
              linkedinName='janine-jimenez-172152201'
              workemail='jimenezj2'
              workservice='lisd'
            />
          </div>

          <div className='contributor'>
            <Contributor
            name='Rayyan Waris'
            imageSource='/img/saitama.jpg'
              linkedinName='rayyan-waris-b6821020b'
              instagramName='raywa04'
              workemail='warisr'
              workservice='lisd'
            />
          </div>

          <div className='contributor'>
            <Contributor
            name='Sanjitha Venkata'
            imageSource='/img/saitama.jpg'
            />
          </div>

      </div>
    </div>
  )
};

export default Credit;