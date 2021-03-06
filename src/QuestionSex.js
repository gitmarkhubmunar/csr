import React from 'react'

import ButtonSurvey from './ButtonSurvey'

class QuestionSex extends React.Component {
    render () {
        const { changeValue, className, color, sex } = this.props
        return (
            <div className={className}>
                <div className="icon-label">
                    <div>
                        <object className={sex === null ? 'variable-icon' : 'variable-icon answered'} data="/assets/sex.svg" type="image/svg+xml" />
                    </div>
                    <div className={sex === null ? 'variable-name' : 'variable-name answered'}>sex</div>
                </div>
                <div className="input-area">
                    <ButtonSurvey
                        color={color}
                        handleClick={() => changeValue('sex', 'male')}
                        turnedOn={sex === 'male'}
                    />
                    <ButtonSurvey
                        color={color}
                        handleClick={() => changeValue('sex', 'female')}
                        turnedOn={sex === 'female'}
                    />
                </div>
            </div>
        )
    }
}

QuestionSex.defaultProps = {
    color: 'black',
}

export default QuestionSex
