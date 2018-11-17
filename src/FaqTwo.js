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
                        <h3 className="question-header">Questions to think about</h3>
                        <FaqQuestion
                            number={1}
                            title="What’s important to me?" 
                            content={
                                <ExpandedContent
                                    content="These are personal questions best discussed with your family, friends, and care providers.  But it is your life, so thinking about how you want to live it is something we believe we all have the right to do.  Even if survival rates are good, stopping to think about what we want to do, who we want to be, and how we want to live is a perfectly good thing to do, no matter the diagnosis." 
                                    image={<img src="../assets/advanced.directive.jpg" />}
                                    siteRef="faucibus a in"
                                    time="1 min" 
                                />
                            }
                        />
                        <FaqQuestion
                            className="border-top-white"
                            number={2}
                            title="Do I want my wishes for end of life known in writing? (Advanced Directive?)" 
                            content={
                                <div className="link-styling">
                                <ExpandedContent
                                    content={<a href="https://www.cancer.org/treatment/finding-and-paying-for-treatment/understanding-financial-and-legal-matters/advance-directives/advance-health-care-directive-formats.html" target="_blank">"How to set up an advance directive so that it works when you need it"</a>}
                                    image={<img src="../assets/advanced.directive.jpg" />}
                                    siteRef="cancer.org"
                                    time="10 min"
                                />
                                </div>
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default FaqTwo
