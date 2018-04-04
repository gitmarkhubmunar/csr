import React from 'react'
import KeyQuestions from './KeyQuestions'

class MessagingPanel extends React.Component {
    render () {
        return <div className="messaging-panel">
        <div className="messaging font-size-2">
            It takes courage 
            to get these answers.
        </div>

        <div className="display-block">
            <div className="display-block">
        <div className="share-wrapper">
                <div className="font-size-3 white messaging-body-copy">
                Many people find it helpful to share these statistics 
                with their doctor. Or pass it to others that recognize 
                the importance in this card.
                </div>
                <div className="white messaging-button messaging-body-copy"> share </div>
                </div>
            </div>

        <div className="display-block">
        <div className="share-wrapper">
                <div className="font-size-3 white messaging-body-copy">
                Also, here are a few popular questions
                asked when visiting the office …
                </div>
                <div className="white messaging-button messaging-body-copy"> key questions </div>
                </div>
            </div>
            
        




        </div>

          <KeyQuestions />

        </div> 

    }
}

export default MessagingPanel
