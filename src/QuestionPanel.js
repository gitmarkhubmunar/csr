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
                    <div className="survey-hairline" style={{ flex: '0 0 1px', background: 'white' }} />
                    <div className="input-button1">   
                        <div>female</div>
                    </div>
                </div>
            }

            if (activeQuestion === 'age') {
                return <div className="flex-row">
                    <div className="input-button-age">
                        type in your age
                    </div>
                </div>
            }

            if (activeQuestion === 'stage') {
                return <div className="flex-row stage-row">
                    <div className="input-button-stage">
                    1
                    </div>
                    <div className="survey-hairline" style={{ flex: '0 0 1px', background: '#cacaca' }} />
                    <div className="input-button-stage">   
                        <div>2</div>
                    </div>
                    <div className="survey-hairline" style={{ flex: '0 0 1px', background: '#cacaca' }} />
                    <div className="input-button-stage">   
                        <div>3</div>
                    </div>
                    <div className="survey-hairline" style={{ flex: '0 0 1px', background: '#cacaca' }} />
                    <div className="input-button-stage">   
                        <div>4</div>
                    </div>

                </div>
            }

            if (activeQuestion === 'grade') {
                return <div className="flex-column">
                    <div className="input-button-grade">
                        undifferentiated
                    </div>
                    <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                    <div className="input-button-grade">
                        moderately undifferentiated
                    </div>
                    <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                     <div className="input-button-grade">
                        well-differentiated
                    </div>

                </div>
            }

            if (activeQuestion === 'diagnosed') {
                return <div>
                <div>
                    <div className="flex-row">
                        <div className="input-button-diagnosed">
                        <div>.</div>
                        today
                        </div>
                        <div  style={{ flex: '0 0 1px', background: '#cacaca' }} />
                        <div className="input-button-diagnosed">   
                            <div className="diagnosed-number">2</div>
                            <div className="time-unit"> days</div>
                        </div>
                        <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                        <div className="input-button-diagnosed">   
                            <div className="diagnosed-number">2</div>
                            <div className="time-unit"> weeks</div>
                        </div>
                        <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                        <div className="input-button-diagnosed">   
                            <div className="diagnosed-number">2</div>
                            <div className="time-unit"> months</div>
                        </div>
                        <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                        <div className="input-button-diagnosed">   
                            <div className="diagnosed-number">2</div>
                            <div className="time-unit">months</div>
                        </div>
                        <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                        <div className="input-button-diagnosed">   
                            <div className="diagnosed-number">2</div>
                            <div className="time-unit">months</div>
                        </div>
                        <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                        <div className="input-button-diagnosed">   
                            <div className="diagnosed-number">2</div>
                            <div className="time-unit">months</div>
                        </div>
                        <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                        <div className="input-button-diagnosed">   
                            <div className="diagnosed-number">2</div>
                            <div className="time-unit">months</div>
                        </div>
                        <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                        <div className="input-button-diagnosed">   
                            <div className="diagnosed-number">2</div>
                            <div className="time-unit">years</div>
                        </div>
                        <div style={{ flex: '0 0 1px', background: '#cacaca' }} />
                    </div>
                  </div>  
                </div>
            }
        };

        return <div className="question-panel">
           <div className="question-controls">{showQuestion(activeQuestion)}</div>
        </div>
    }
}

export default QuestionPanel
