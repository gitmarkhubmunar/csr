import React from 'react'

class FaqDoctor extends React.Component {
    render () {
        return (
          <div className="faq doctor-bg-color">
          <div></div>
          <div className="topic-cell">
              <h3>Questions to ask your doctor</h3>
              <div className="">
                <div className="faq-question flex-row nowrap">
                  <div className="number-bullet">1</div>
                  <div className="suggestions">Can you verify my stage and grade?</div>
                  <div className="expand-icon">+</div>
                </div>
              </div>
              <div className="faq-question flex-row nowrap">
                <div className="number-bullet">2</div>
                <div className="suggestions">What is your estimate of my survival rate for 1,3, and 5 years?</div>
                <div className="expand-icon">+</div>
              </div>
              <div className="faq-question flex-row nowrap">
                <div className="number-bullet">3</div>
                <div className="suggestions">Is there anything I can do to improve my prognosis (outlook)?</div>
                <div className="expand-icon">+</div>
              </div>
            </div>
            <div></div>
            </div>
        )
    }
}

export default FaqDoctor
