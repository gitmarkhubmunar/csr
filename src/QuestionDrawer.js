import Icon from 'react-ionicons'
import React from 'react'

import Slider from 'rc-slider'
import ButtonSurvey from './ButtonSurvey'

class QuestionDrawer extends React.Component {
    render () {
        console.log(this.props);
        const { age, changeValue, diagnosed, grade, sex, stage } = this.props
        return (
            <div className="variables">
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className={sex === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/sex.svg" type="image/svg+xml" />
                        </div>
                        <div className={sex === null ? 'variable-name' : 'variable-name answered'}>sex</div>
                    </div>
                    <div className="input-area">
                        <ButtonSurvey handleClick={() => changeValue('sex', 'male')} className="button-u" name="male" turnedOn={sex === 'male'} />
                        <ButtonSurvey handleClick={() => changeValue('sex', 'female')} className="button-u" name="female" turnedOn={sex === 'female'} />
                    </div>
                </div>
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className={age === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/age.svg" type="image/svg+xml" />
                        </div>
                        <div className={age === null ? 'variable-name' : 'variable-name answered'}>age</div>
                    </div>
                    <div className="input-area">
                        <input className="input-field" onBlur={(event) => changeValue('age', event.target.value)} initialValue={age} />
                    </div>
                </div>
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className={stage === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/stage.svg" type="image/svg+xml" />
                        </div>
                        <div className={stage === null ? 'variable-name' : 'variable-name answered'}>stage</div>
                    </div>
                    <div className="input-area">
                        <ButtonSurvey handleClick={() => changeValue('stage', '1')} className="button-u" name="1" turnedOn={stage === '1'} />
                        <ButtonSurvey handleClick={() => changeValue('stage', '2')} className="button-u" name="2" turnedOn={stage === '2'} />
                        <ButtonSurvey handleClick={() => changeValue('stage', '3')} className="button-u" name="3" turnedOn={stage === '3'} />
                        <ButtonSurvey handleClick={() => changeValue('stage', '4')} className="button-u" name="4" turnedOn={stage === '4'} />
                    </div>
                </div> 
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className={grade === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/grade.svg" type="image/svg+xml" />
                        </div>
                        <div className={grade === null ? 'variable-name' : 'variable-name answered'}>grade</div>
                    </div>
                    <div className="input-area">
                        <ButtonSurvey handleClick={() => changeValue('grade', '1')} className="button-u" name="well" turnedOn={grade === '1'} />
                        <ButtonSurvey handleClick={() => changeValue('grade', '2')} className="button-u" name="moderately" turnedOn={grade === '2'} />
                        <ButtonSurvey handleClick={() => changeValue('grade', '3')} className="button-u" name="poorly" turnedOn={grade === '3'} />
                    </div> 
                </div>               
                <div className="variable-row flex-row nowrap">
                    <div className="icon-label">
                        <div>
                            <object className={diagnosed === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/diagnosed.svg" type="image/svg+xml" />
                        </div>
                        <div className={diagnosed === null ? 'variable-name' : 'variable-name answered'}>diagnosed</div>
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
                            <object className={sex === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/diagnosed.svg" type="image/svg+xml" />
                        </div>
                        <div className={sex === null ? 'variable-name' : 'variable-name answered'}>diagnosed</div>
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
