import React from 'react'

class Faq extends React.Component {
    render () {
        return (
          <div className="faq">
            <h3>Questions to ask your doctor</h3>
            <div className="faq-question flex-row nowrap">
              <div>1</div>
              <div>Can you verify my stage and grade?</div>
              <div>+</div>
            </div>
            <div className="faq-question flex-row nowrap">
              <div>2</div>
              <div>What is your estimate of my survival rate?</div>
              <div>+</div>
            </div>
            <div className="faq-question flex-row nowrap">
              <div>3</div>
              <div>Who be what?</div>
              <div>+</div>
            </div>
          </div>
        )
    }
}

export default Faq
