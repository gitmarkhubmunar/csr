import React from 'react'

class Faq extends React.Component {
    render () {
        return (
          <div className="faq">
          <div></div>
          <div className="topic-cell">
              <h3>Questions to ask your Patient</h3>
              <div className="">
                <div className="faq-question flex-row nowrap">
                  <div className="number-bullet">1</div>
                  <div className="suggestions">Best practices in talking to patients about life expectancy </div>
                  <div className="expand-icon">+</div>
                </div>
              </div>
              <div className="faq-question flex-row nowrap">
                <div className="number-bullet">2</div>
                <div className="suggestions">About CancerSurvivalRates.Org data and models</div>
                <div className="expand-icon">+</div>
              </div>
              <div className="faq-question flex-row nowrap">
                <div className="number-bullet">3</div>
                <div className="suggestions">Question? Suggestion?</div>
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
            <div></div>
            </div>
        )
    }
}

export default Faq
