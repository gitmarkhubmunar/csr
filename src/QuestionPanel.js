import React from 'react'

class QuestionPanel extends React.Component {
    render () {
        const { activeQuestion } = this.props
        const showQuestion = (activeQuestion: string) => {
            if (activeQuestion === 'sex') {
                return <div className="flex-row">
                    <div className="input-button1">
                        <div>male</div>
                    </div>
                    <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                    <div className="input-button1">   
                        <div>female</div>
                    </div>
                </div>
            }

            if (activeQuestion === 'age') {
                return <div className="flex-row">
                    This is a new age thing
                </div>
            }

            if (activeQuestion === 'stage') {
                return <div className="flex-row">
                    STAGE
                </div>
            }

            if (activeQuestion === 'grade') {
                return <div className="flex-row">
                    GRADE
                </div>
            }

            if (activeQuestion === 'diagnosed') {
                return <div className="flex-row">
                    DIAGNOSED
                </div>
            }
        };

        return <div className="question-panel">
           {showQuestion(activeQuestion)}
        </div>
    }
}

export default QuestionPanel
