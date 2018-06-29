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
              <div>What is your estimate of my survival rate for 1,3, and 5 years?</div>
              <div>+</div>
            </div>
            <div className="faq-question flex-row nowrap">
              <div>3</div>
              <div>Is there anything I can do to improve my prognosis (outlook)?</div>
              <div>+</div>
            </div>

            <h3>Questions for you to think about & discuss</h3>
            <div className="faq-question flex-row nowrap">
              <div>1</div>
              <div>What's important to me? What are my priorities?</div>
              <div>+</div>
            </div>
            <div className="faq-question flex-row nowrap">
              <div>2</div>
              <div>Do I want my wishes for end of life known in writing (advanced directive?)</div>
              <div>+</div>
            </div>
            <div className="faq-question flex-row nowrap">
              <div>3</div>
              <div>Should I have a will or a living trust?</div>
              <div>+</div>
            </div>

          </div>

        )
    }
}

export default Faq
