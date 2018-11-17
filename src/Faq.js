import React from 'react'

import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'
import ShareCard from './ShareCard'

class Faq extends React.Component {
    render () {
        return (
            <div className="faq">
                <div className="content-container">
                    <div className="faq-content">
                        <h3>Questions to ask your doctor</h3>
                        <FaqQuestion
                            className="border-top-white"
                            number={1}
                            title="Can you verify my stage and grade?" 
                            content={
                                <ExpandedContent
                                    content="Lorem ipsum"
                                />
                            }
                        />
                        <FaqQuestion
                            number={2}
                            title="What is your estimate of my survival rate for 1, 3, and 5 years?" 
                            content={
                                <ExpandedContent
                                    content="Lorem ipsum"
                                />
                            }
                        />
                        <FaqQuestion
                            number={3}
                            title="Is there anything I can do to improve my prognosis (outlook)?" 
                            content={
                                <ExpandedContent
                                    content="Lorem ipsum"
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq
