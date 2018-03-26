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
                    <div className="input-button1">
                        type in your age
                    </div>
                </div>
            }

            if (activeQuestion === 'stage') {
                return <div className="flex-row">
                    <div className="input-button1">
                    1
                    </div>
                    <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                    <div className="input-button1">   
                        <div>2</div>
                    </div>
                    <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                    <div className="input-button1">   
                        <div>3</div>
                    </div>
                    <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                    <div className="input-button1">   
                        <div>4</div>
                    </div>

                </div>
            }

            if (activeQuestion === 'grade') {
                return <div className="flex-column">
                    <div className="input-button1">
                        undifferentiated
                    </div>
                    <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                    <div className="input-button1">
                        moderately undifferentiated
                    </div>
                    <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                     <div className="input-button1">
                        well-differentiated
                    </div>

                </div>
            }

            if (activeQuestion === 'diagnosed') {
                return <div>
                <div>
                    <div className="flex-row">
                        <div className="input-button1">
                        today
                        </div>
                        <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                        <div className="input-button1">   
                            <div>2</div>
                            <div>time dur</div>
                        </div>
                        <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                        <div className="input-button1">   
                            <div>2</div>
                            <div>time dur</div>
                        </div>
                        <div className="input-button1">   
                            <div>2</div>
                            <div>time dur</div>
                        </div>
                        <div className="input-button1">   
                            <div>2</div>
                            <div>time dur</div>
                        </div>
                        <div className="input-button1">   
                            <div>2</div>
                            <div>time dur</div>
                        </div>
                        <div className="input-button1">   
                            <div>2</div>
                            <div>time dur</div>
                        </div>
                        <div className="input-button1">   
                            <div>2</div>
                            <div>time dur</div>
                        </div>
                    </div>
                  </div>  
                </div>
            }
        };

        return <div className="question-panel">
           {showQuestion(activeQuestion)}
        </div>
    }
}

export default QuestionPanel
