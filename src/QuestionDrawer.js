import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'
import ReactSlider from 'react-slider'

import ButtonSurvey from './ButtonSurvey'

// import ReactSliderAge from './ReactSliderAge'
import CancerTypes from './data/CancerTypes'

class QuestionDrawer extends React.Component {
    componentWillMount () {
        this.setState({
            nextAge: this.props.age,
            nextDiagnosed: this.props.diagnosed,
        })
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            nextAge: nextProps.age,
            nextDiagnosed: nextProps.diagnosed,
        })
    }

    // <div className="input-area">
    //                     <input className="input-field" onBlur={(event) => changeValue('age', event.target.value)} defaultValue={age} />
    //                 </div>

    //<div className="slider-tick-button" style={{ left: '30%' }} onClick={() => changeValue('diagnosed', 3)}></div>
                            //<div className="slider-tick-button" style={{ left: '60%' }} onClick={() => changeValue('diagnosed', 12)}></div>

    // <div className="slider-tick-button" style={{ left: '30%' }} onClick={() => changeValue('diagnosed', 3)}>3 mos ago</div>
                            //<div className="slider-tick-button" style={{ left: '60%' }} onClick={() => changeValue('diagnosed', 12)}>1 yr ago</div>

    render () {
        const { age, changeValue, diagnosed, grade, selectedCancerType, sex, stage } = this.props
        const { nextDiagnosed } = this.state
        const { nextAge } = this.state
        const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
        const color = selectedCancer.colors[0]

        return (
            <div className="question-drawer variables">
                <div className="content-container">
                    <div className="variable-row">
                        <div className="icon-label">
                            <div>
                                <object className={sex === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/sex.svg" type="image/svg+xml" />
                            </div>
                            <div className={sex === null ? 'variable-name' : 'variable-name answered'}>sex</div>
                        </div>
                        <div className="input-area">
                            <ButtonSurvey color={color} handleClick={() => changeValue('sex', 'male')} className="button-u" name="male" turnedOn={sex === 'male'} />
                            <ButtonSurvey color={color} handleClick={() => changeValue('sex', 'female')} className="button-u" name="female" turnedOn={sex === 'female'} />
                        </div>
                    </div>
                    <div className="variable-row">
                        <div className="icon-label">
                            <div>
                                <object className={age === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/age.svg" type="image/svg+xml" />
                            </div>
                            <div className={age === null ? 'variable-name' : 'variable-name answered'}>age</div>
                        </div>
                        <div className="input-area">
                            <ReactSlider
                                className="horizontal-slider bar"
                                value={nextAge}
                                min={18}
                                max={92}
                                onAfterChange={(value) => changeValue('age', value)}
                                onChange={(value) => this.setState({ nextAge: value })}
                            >
                                <div>{nextAge}</div>
                            </ReactSlider>
                            <div style={{ position: 'relative', width: '100%' }}>
                                <div className="slider-tick-button marker-start" style={{ left: '5%' }} onClick={() => changeValue('diagnosed', 0)}>18</div>
                                <div className="slider-tick-button marker-end" style={{ left: '105%' }} onClick={() => changeValue('diagnosed', 24)}>92</div>
                            </div>
                        </div>
                    </div>
                    <div className="variable-row">
                        <div className="icon-label">
                            <div>
                                <object className={stage === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/stage.svg" type="image/svg+xml" />
                            </div>
                            <div className={stage === null ? 'variable-name' : 'variable-name answered'}>stage</div>
                        </div>
                        <div className="input-area">
                            <ButtonSurvey color={color} handleClick={() => changeValue('stage', '1')} className="button-u" name="1" turnedOn={stage === '1'} />
                            <ButtonSurvey color={color} handleClick={() => changeValue('stage', '2')} className="button-u" name="2" turnedOn={stage === '2'} />
                            <ButtonSurvey color={color} handleClick={() => changeValue('stage', '3')} className="button-u" name="3" turnedOn={stage === '3'} />
                            <ButtonSurvey color={color} handleClick={() => changeValue('stage', '4')} className="button-u" name="4" turnedOn={stage === '4'} />
                        </div>
                    </div> 
                    <div className="variable-row grade">
                        <div className="icon-label">
                            <div>
                                <object className={grade === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/grade.svg" type="image/svg+xml" />
                            </div>
                            <div className={grade === null ? 'variable-name' : 'variable-name answered'}>grade</div>
                        </div>
                        <div className="input-area">
                            <ButtonSurvey color={color} handleClick={() => changeValue('grade', '1')} className="button-u" name="well" turnedOn={grade === '1'} />
                            <ButtonSurvey color={color} handleClick={() => changeValue('grade', '2')} className="button-u" name="moderately" turnedOn={grade === '2'} />
                            <ButtonSurvey color={color} handleClick={() => changeValue('grade', '3')} className="button-u" name="poorly" turnedOn={grade === '3'} />
                        </div> 
                    </div>               
                    <div className="variable-row">
                        <div className="icon-label">
                            <div>
                                <object
                                    className={diagnosed === 0 ? 'variable-icon' : 'variable-icon answered'}
                                    data="/assets/diagnosed.svg"
                                    style={{ paddingLeft: 5 }}
                                    type="image/svg+xml"
                                />
                            </div>
                            <div className={diagnosed === 0 ? 'variable-name' : 'variable-name answered'}>diagnosed</div>
                        </div>
                        <div className="input-area diagnosis">
                            <ReactSlider
                                className="horizontal-slider bar"
                                value={nextDiagnosed}
                                max={24}
                                onAfterChange={(value) => changeValue('diagnosed', value)}
                                onChange={(value) => this.setState({ nextDiagnosed: value })}
                            >
                                <div className="label">
                                    {nextDiagnosed >= 1 && nextDiagnosed}
                                    {nextDiagnosed && nextDiagnosed >= 1 &&
                                        <span style={{ fontSize: '.8em' }}><br />{nextDiagnosed >= 2 ? 'months' : 'month'} ago</span>
                                    }
                                </div>
                            </ReactSlider>
                            <div style={{ position: 'relative', width: '100%' }}>
                                <div className="slider-tick-button marker-start slider-mobile-l" style={{ left: '4%' }} onClick={() => changeValue('diagnosed', 0)}>Within past month</div>
                                <div className="slider-tick-button marker-end-diagnosed slider-mobile-r" style={{ left: '104%' }} onClick={() => changeValue('diagnosed', 24)}>3 years ago</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionDrawer
