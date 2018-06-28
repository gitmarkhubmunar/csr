import Icon from 'react-ionicons'
import React from 'react'

class QuestionDrawer extends React.Component {
    render () {
        const {
            age,
            diagnosed,
            grade,
            sex,
            stage,
            switchQuestion,
        } = this.props
        return (
            <div className="variables">
                <div onClick={() => switchQuestion('sex')} className="variable-switch-unanswered">
                    <div className="flex-row">
                        <div className="icon-label">
                            <div>
                                <object className="variable-icon-unanswered" data="/assets/sex.svg" type="image/svg+xml" />
                            </div>
                            <div className="topic-unanswered">sex</div>
                        </div>
                        <div className="input-area">
                            <div>male peen</div>
                            <div>female</div>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div className="icon-label">
                            <div>
                                <object className="variable-icon-unanswered" data="/assets/age.svg" type="image/svg+xml" />
                            </div>
                            <div className="topic-unanswered">age</div>
                        </div>
                        <div className="input-area">
                            <div>age control goes here</div>
                        </div>
                    </div>
                    <div className="flex-row">
                        <div>
                            <object className="variable-icon-unanswered" data="/assets/stage.svg" type="image/svg+xml" />
                        </div>
                        <div className="topic-unanswered">stage</div>
                    </div> 
                    <div className="flex-row">
                        <div>
                            <object className="variable-icon-unanswered" data="/assets/grade.svg" type="image/svg+xml" />
                        </div>
                        <div className="topic-unanswered">grade</div>
                    </div>            
                    <div className="flex-row">
                        <div>
                            <object className="variable-icon-unanswered" data="/assets/diagnosed.svg" type="image/svg+xml" />
                        </div>
                        <div className="topic-unanswered">diagnosed</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionDrawer
