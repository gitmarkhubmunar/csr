import React from 'react'

import DeselectButton from './DeselectButton'
import ButtonSurvey from './ButtonSurvey'

class QuestionCustom extends React.Component {
    render () {
        const { changeValue, className, color, userData, variable } = this.props
        if (!variable) {
            return null
        }
        const { id, icon, kind, name, options } = variable
        
        if (kind === 'radio') {
            return (
                <div className={className}>
                    <div className="icon-label">
                        {icon &&
                            <div>
                                <object
                                    className={userData[id] === null ? 'variable-icon' : 'variable-icon answered'}
                                    data={`/assets/${icon}`}
                                    type="image/svg+xml"
                                />
                            </div>
                        }
                        <div className={userData[id] === null ? 'variable-name' : 'variable-name answered'}>{name}</div>
                        <DeselectButton />
                    </div>
                    <div className="input-area">
                        {options.map((option, o) => (
                            <ButtonSurvey
                                className="button-u"
                                color={color}
                                handleClick={() => changeValue(id, option.value)}
                                key={o}
                                name={option.name}
                                turnedOn={userData[id] === option.value}
                            />
                        ))}
                    </div> 
                </div>
            )
        }
        return null
    }
}

QuestionCustom.defaultProps = {
    color: 'black',
}

export default QuestionCustom
