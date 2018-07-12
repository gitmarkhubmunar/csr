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
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className="variable-icon-unanswered" data="/assets/sex.svg" type="image/svg+xml" />
                        </div>
                        <div className="topic-unanswered">sex</div>
                    </div>
                    <div className="input-area">
                        <div className="button-u">male</div>
                        <div className="button-u">female</div>
                    </div>
                </div>
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className="variable-icon-unanswered" data="/assets/age.svg" type="image/svg+xml" />
                        </div>
                        <div className="topic-unanswered">age</div>
                    </div>
                    <div className="input-area">
                        <div>[ insert age slider ]</div>
                    </div>
                </div>
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className="variable-icon-unanswered" data="/assets/stage.svg" type="image/svg+xml" />
                        </div>
                        <div className="topic-unanswered">stage</div>
                    </div>
                    <div className="input-area">
                        <div className="button-u">1</div>
                        <div className="button-u">2</div>
                        <div className="button-u">3</div>
                        <div className="button-u">4</div>
                    </div>
                </div> 
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className="variable-icon-unanswered" data="/assets/grade.svg" type="image/svg+xml" />
                        </div>
                        <div className="topic-unanswered">grade</div>
                    </div>
                    <div className="input-area">
                        <div className="button-u">well</div>
                        <div className="button-u">moderately</div>
                        <div className="button-u">poorly</div>
                    </div> 
                </div>               
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className="variable-icon-unanswered" data="/assets/diagnosed.svg" type="image/svg+xml" />
                        </div>
                        <div className="topic-unanswered">diagnosed</div>
                    </div>
                    <div className="input-area">
                        <div>[ insert diagnosed slider ]</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionDrawer
