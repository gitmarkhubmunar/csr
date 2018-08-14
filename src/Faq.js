import React from 'react'

class Faq extends React.Component {
    render () {
        return (
          <div className="faq">
            <div className="test-square">test</div>
            <h3>Questions to ask your doctor</h3>
            <div className="question-row">
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

            <h3 className="question-header">Questions for you to think about & discuss</h3>
            <div className="faq-question flex-row nowrap">
              <div className="number-bullet">1</div>
              <div className="suggestions">What’s important to me? What are my priorities?</div>
              <div className="expand-icon">+</div>
            </div>
            <div className="faq-question flex-row nowrap">
              <div className="number-bullet">2</div>
              <div className="suggestions">Do I want my wishes for end of life known in writing (advanced directive?)</div>
              <div className="expand-icon">+</div>
            </div>
            <div className="faq-question flex-row nowrap">
              <div className="number-bullet">3</div>
              <div className="suggestions">Should I have a will or a living trust?</div>
              <div className="expand-icon">+</div>
            </div>
            </div>
        )
    }
}

export default Faq
