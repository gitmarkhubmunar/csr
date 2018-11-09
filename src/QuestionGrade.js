import React from 'react'

import DeselectButton from './DeselectButton'
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
                    <DeselectButton />
                </div>
                <div className="input-area">
                    <ButtonSurvey color={color} handleClick={() => changeValue('grade', '1')} className="button-u" name="well" turnedOn={grade === '1'} />
                    <ButtonSurvey color={color} handleClick={() => changeValue('grade', '2')} className="button-u" name="moderately" turnedOn={grade === '2'} />
                    <ButtonSurvey color={color} handleClick={() => changeValue('grade', '3')} className="button-u" name="poorly" turnedOn={grade === '3'} />
                </div> 
            </div>
        )
    }
}

QuestionGrade.defaultProps = {
    color: 'black',
}

export default QuestionGrade
