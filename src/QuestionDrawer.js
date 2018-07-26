import Icon from 'react-ionicons'
import React from 'react'

import Slider from 'rc-slider'
import ButtonSurvey from './ButtonSurvey'

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
                        <ButtonSurvey className="button-u" name="male" />
                        <ButtonSurvey className="button-u" name="female" />
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
                        <input className="input-field"/>
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
                        <ButtonSurvey className="button-u" name="1" />
                        <ButtonSurvey className="button-u" name="2" />
                        <ButtonSurvey className="button-u" name="3" />
                        <ButtonSurvey className="button-u" name="4" />
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
                        <ButtonSurvey className="button-u" name="well" />
                        <ButtonSurvey className="button-u" name="moderately" />
                        <ButtonSurvey className="button-u" name="poorly" />
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
                        <ButtonSurvey className="button-u" name="this week" />
                        <ButtonSurvey className="button-u" name="this month" />
                        <ButtonSurvey className="button-u" name="6 Mos ago" />
                        <ButtonSurvey className="button-u" name="1 Yr ago" />
                     </div>
                </div> 
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className="variable-icon-unanswered" data="/assets/diagnosed.svg" type="image/svg+xml" />
                        </div>
                        <div className="topic-unanswered">diagnosed</div>
                    </div>
                    <div className="input-area slider-container">
                        <Slider value={1} />
                    </div>
                </div> 
            </div>
        )
    }
}

export default QuestionDrawer
