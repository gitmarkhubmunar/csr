import React from 'react'
import {Tooltip,} from 'react-tippy';

import ButtonSurvey from './ButtonSurvey'

class QuestionGrade extends React.Component {
    render () {
        const { changeValue, className, color, grade } = this.props
        return (
            <div className={className}>
                <div className="icon-label">
                    <div>
                        <object className={grade === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/grade.svg" type="image/svg+xml" />
                    </div>
                    <div className={grade === null ? 'variable-name' : 'variable-name answered'}>grade</div>
                </div>
                <div className="input-area">

                <div className="tippy-container">
                    <Tooltip
                      className="tippy"
                      title="Well (Grade 1)"
                      position="bottom"
                      trigger="mouseenter"
                      position= "top"
                      size="big"
                    > 
                      <p>
                            <ButtonSurvey color={color} handleClick={() => changeValue('grade', '1')} className="" name="well" turnedOn={grade === '1'} />
                      </p>
                    </Tooltip>
                </div>
                <div className="tippy-container">
                    <Tooltip
                      title="Moderately (Grade 2)"
                      position="bottom"
                      trigger="mouseenter"
                      position= "top"
                      size="big"
                    > 
                      <p>
                            <ButtonSurvey color={color} handleClick={() => changeValue('grade', '2')} className="" name="moderately" turnedOn={grade === '2'} />
                      </p>
                    </Tooltip>
                </div>
                <div className="tippy-container">
                    <Tooltip
                      title="Poorly & Undifferentiated (Grade 3/4)"
                      position="bottom"
                      trigger="mouseenter"
                      position= "top"
                      size="big"
                    > 
                      <p>
                            <ButtonSurvey color={color} handleClick={() => changeValue('grade', '3')} className="" name="poorly" turnedOn={grade === '3'} />
                      </p>
                    </Tooltip>
                </div>

                </div> 
            </div>
        )
    }
}

QuestionGrade.defaultProps = {
    color: 'black',
}

export default QuestionGrade
