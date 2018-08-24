import React from 'react'



import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'



class ShareCard extends React.Component {
    render () {
      return ( 
        <div className="share-panel">
          <div className="feedback-panel">It takes Courage to get these results.</div>
          <div className="share-card">
              <div className="share-header">Share your card with this link</div>
                <div className="link-box" >
                <div className="link"> https://this.stat.card/4cfmEgpOOZk </div>
                <div className="copy-button"> COPY </div>
              </div>
          </div>

        </div>
     )
    }
}

export default ShareCard
