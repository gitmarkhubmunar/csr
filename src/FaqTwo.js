import React from 'react'

import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'
import ShareCard from './ShareCard'

class FaqTwo extends React.Component {
    render () {
            return (
        <div className="faq secondary-purple">
          <div></div>
            <div className="topic-cell">
                

                <h3 className="question-header secondary-purple">Questions for you to think about</h3>
            <FaqQuestion
              // className="border-bottom-white"
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
              // className="border-bottom-white"
              number={2}
              title="What's important to me? What are my priorities?" 
              content={
                <div>
                  <div className="expanded-container">
                    <ExpandedContent
                    siteRef="faucibus a in"
                    time="1 min" 
                    className="expanded-content"
                    content=" Praesent in felis lacinia eros." 
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

export default FaqTwo
