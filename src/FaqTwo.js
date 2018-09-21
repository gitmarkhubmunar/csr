import React from 'react'

import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'
import ShareCard from './ShareCard'

class FaqTwo extends React.Component {
    render () {
        return (
            <div className="faq secondary-purple">
                <div className="content-container">
                    <div className="faq-content">
                        <h3 className="question-header">Questions for you to think about</h3>
                        <FaqQuestion
                            className="border-top-white"
                            number={1}
                            title="Do I want my wishes for end of life known in writing? (Advanced Directive?)" 
                            content={
                                <ExpandedContent
                                    content="How to set up an advance directive so that it works when you need it" 
                                    image={<img src="../assets/advanced.directive.jpg" />}
                                    siteRef="cancer.org"
                                    time="10 min"
                                />
                            }
                        />
                        <FaqQuestion
                            number={2}
                            title="What's important to me? What are my priorities?" 
                            content={
                                <ExpandedContent
                                    content="Praesent in felis lacinia eros." 
                                    image={<img src="../assets/advanced.directive.jpg" />}
                                    siteRef="faucibus a in"
                                    time="1 min" 
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FaqTwo
