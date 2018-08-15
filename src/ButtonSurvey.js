import React from 'react'

class ButtonSurvey extends React.Component {
    render () {
        const { turnedOn, handleClick, name, color } = this.props
        let buttonClassName = 'button-survey'
        if (turnedOn === true) {
            buttonClassName = 'button-survey active'
        }
        return (
            <div
                onClick={handleClick}
                className={buttonClassName}
                style={{
                    background: turnedOn === true && color,
                    borderColor: turnedOn === true && color,
                }}
            >
                {name}
            </div>  
        )
    }
}

export default ButtonSurvey