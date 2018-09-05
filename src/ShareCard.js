import React from 'react'



import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'



class ShareCard extends React.Component {

clicked(){
  console.log('fuck. where do I go from her')
}

    render () {
      return ( 
        <div className="share-panel">
        <div className="close-modal">
           <div onClick={this.clicked}>X </div>
           </div>
          <div className="feedback-panel">Share this information with others.</div>
          <div className="share-card">
              <div className="share-header">Click copy and paste in an email, SMS, etc.</div>
                <div className="link-box" >
                <div className="link"> https://this.stat.card/4cfmEgpOOZk </div>
                
              </div>
              <div className="copy-button"> COPY </div>
          </div>

        </div>
     )
    }
}

export default ShareCard
