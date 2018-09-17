import React from 'react'

import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'
import FaqTwo from './FaqTwo'
import ShareCard from './ShareCard'

class Faq extends React.Component {
    render () {
        return (
            <div className="faq">
                <div className="topic-cell">
                    <h3>Questions to ask your doctor</h3>
                    <div className="faq-question flex-row nowrap border-bottom-white">
                        <div className="number-bullet">1</div>
                        <div className="suggestions-flat">
                            Can you verify my stage and grade?
                        </div>
                        <div className="expand-icon"></div>
                    </div>
                </div>

                <div className="faq-question flex-row nowrap border-bottom-white">
                    <div className="number-bullet">2</div>
                    <div className="suggestions-flat">
                        What is your estimate of my survival rate for 1, 3, and 5 years?
                    </div>
                    <div className="expand-icon"></div>
                </div>

                <div className="faq-question flex-row nowrap border-bottom-white ">
                    <div className="number-bullet">3</div>
                    <div className="suggestions-flat">
                        Is there anything I can do to improve my prognosis (outlook)?
                    </div>
                    <div className="expand-icon"></div>
                </div>
                <FaqTwo />
            </div>
        )
    }
}

export default Faq
