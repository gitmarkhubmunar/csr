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
                            title="What is Stage and why do I need to know it?" 
                            content={
                                <ExpandedContent
                                    content="Cancer Stage is a number, typically from 1 to 4, measuring the size of the cancer tumor and if the cancer has spread. Stage 1 means the cancer hasn’t spread to other parts of the body, while stage 4 means that it has. Stages 2 and 3 are somewhere in between.  Survival rates are typically lower for higher stages."
                                />
                            }
                        />
                        <FaqQuestion
                            number={2}
                            title="What is grade and why do I need to know it?" 
                            content={
                                <ExpandedContent
                                    content="Some cancers also have a grade.   The grade indicates how fast the cancer is growing. Well differentiated means the cancer cells are more like normal cells and growing slower.  Poorly differentiated means the cancer cells don’t look like normal cells and growing faster.  Moderately differentiated grade means the cells are somewhere in between well and poorly differentiated.
                                        Bottom line, confirming stage and/or grade of cancer with your doctor is important for understanding prognosis (outlook) and discussing treatment options."
                                />
                            }
                        />
                        <FaqQuestion
                            number={3}
                            title="What about this estimate?" 
                            content={
                                <ExpandedContent
                                    content="The numbers above represent estimated survival rates based upon past recent cases of other people with this type of cancer.  It is not an estimate of survival for your particular case or that of any given individual.  As such, use this tool as guide, to help you to ask your doctor(s) about your individual case.  You can reference these numbers in asking your doctor what would make your outlook the same or different."
                                />
                            }
                        />

                        <FaqQuestion
                            number={4}
                            title="How can I improve this outlook?" 
                            content={
                                <ExpandedContent
                                    content="Ask your doctor this important question.  Sometimes there may be options that haven’t been discussed, such as clinical trials, experimental treatments, or even basic lifestyle modifications that may extend and improve the quality of your life. It’s worth asking not only once but at different stages of your treatment."
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
