import React from 'react'

import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'
import ShareCard from './ShareCard'

class Faq extends React.Component {
    render () {
      return (
        <div className="faq">
          <div></div>
            <div className="topic-cell">
                <h3>Questions to ask your doctor</h3>
                <div className="faq-question flex-row nowrap border-bottom-white">
                    <div className="number-bullet">1</div>
                    <div className="suggestions">
                    Can you verify my stage and grade?
                    </div>
                    <div className="expand-icon"></div>
                </div>

                <div className="faq-question flex-row nowrap border-bottom-white">
                    <div className="number-bullet">2</div>
                    <div className="suggestions">
                    What is your estimate of my survival rate for 1, 3, and 5 years?
                    </div>
                    <div className="expand-icon"></div>
                </div>

                <div className="faq-question flex-row nowrap border-bottom-white ">
                    <div className="number-bullet">3</div>
                    <div className="suggestions">
                    Is there anything I can do to improve my prognosis (outlook)?
                    </div>
                    <div className="expand-icon"></div>
                </div>


                <h3 className="question-header">Questions for you to think about & discuss</h3>
            <FaqQuestion
              className="border-bottom-white"
              number={1}
              title="Do I want my wishes for end of life known in writing? (Advanced Directive?)" 
              content={
                <div>
                  <div className="expanded-container">
                    <ExpandedContent
                    siteRef="cancer.org"
                    time="10 min" 
                    className="expanded-content"
                    content="How to set up an advance directive so that it works when you need it" 
                    image={<img src="../assets/advanced.directive.jpg" />} />
                  </div>
                </div>
                      }/>
              <FaqQuestion
              className="border-bottom-white"
              number={2}
              title="What's important to me? What are my priorities?" 
              content={
                <div>
                  <div className="expanded-container">
                    <ExpandedContent
                    siteRef="faucibus a in magna"
                    time="1 min" 
                    className="expanded-content"
                    content=" Praesent in felis lacinia eros dictum." 
                    image={<img src="../assets/advanced.directive.jpg" />} />
                  </div>
                </div>
                      }/>

              <FaqQuestion
              className="border-bottom-white"
              number={3}
              title="Should I have a will or living trust?" 
              content={
                <div>
                  <div className="expanded-container">
                    <ExpandedContent
                    siteRef="Nulla"
                    time="et min" 
                    className="expanded-content"
                    content="Sed at eleifend diam.  Venenatis tincidunt gravida." 
                    image={<img src="../assets/advanced.directive.jpg" />} />
                  </div>
                </div>
                      }/>
            </div>
            <div>

            </div>
           


          </div>


)
    }
}

export default Faq
