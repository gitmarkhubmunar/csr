import React, { Component } from 'react'
import Newtongue from '@haiku/thev1sual-newtongue/react'

class HomePage extends Component {
  render () {
    return (
      <div className='home'>
        <section className='home-header'> 
          <div className='column1'>
            <h1>
              <div style={{width: "49px", height: "49px"}}>
                <Newtongue haikuOptions={{loop: false, sizing: 'cover'}} />
              </div>
            </h1>
          </div>

          
          <div className='column2'>
            <div className='contact-items'>
              <div className='contact-item'>
                <div>email:</div>
                <div className="email-link"><a href="mailto:jeff@thevisual.work">jeff@thevisual.work</a></div>
              </div>
            
             
              <div className='contact-item'>
                <div>linkedin:</div>
                <div className="linkedin-link"><a href="https://www.linkedin.com/in/jeff-munar-65836419/?locale=en_US">linkedin.com/jeff-munar</a></div>
              </div>
            </div>
          </div>
        </section>

        <section className='introsection'>
        
          <h3 className='intro animated fadeInDown'>Intro</h3>


          <p className='home-intro'>
            This is the home page
          </p>
          <div className='past animated fadeInDown'>
            <h3>
              Past Clients
            </h3>
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage
