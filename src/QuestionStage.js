import React from 'react'

import ButtonSurvey from './ButtonSurvey'

class QuestionStage extends React.Component {
    render () {
        const { changeValue, className, color, stage } = this.props
        return (
            <div className={className}>
                <div className="icon-label">
                    <div>
                        <object className={stage === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/stage.svg" type="image/svg+xml" />
                    </div>
                    <div className={stage === null ? 'variable-name' : 'variable-name answered'}>stage</div>
                </div>
                <div className="input-area">
                    <ButtonSurvey color={color} handleClick={() => changeValue('stage', '1')} name="1" turnedOn={stage === '1'} />
                    <ButtonSurvey color={color} handleClick={() => changeValue('stage', '2')} name="2" turnedOn={stage === '2'} />
                    <ButtonSurvey color={color} handleClick={() => changeValue('stage', '3')} name="3" turnedOn={stage === '3'} />
                    <ButtonSurvey color={color} handleClick={() => changeValue('stage', '4')} name="4" turnedOn={stage === '4'} />
                </div>
            </div>
        )
    }
}

QuestionStage.defaultProps = {
    color: 'black',
}

export default QuestionStage
