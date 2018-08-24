import React from 'react'



import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'



class FeedbackSlot extends React.Component {
    render () {
      const { variable, input } = this.props

      return ( 


          <div className="feedback-row ">
              <div className="profile">your profile</div>
              <div className="answers">
                <div className="slot-container">
                  <div>{variable}</div>
                  <div className="slot-answer">{input}</div>
                </div>
              </div>
          </div>
     )
    }
}

export default FeedbackSlot
