import React from 'react'

class ButtonSurvey extends React.Component {
    render () {
        let buttonClassName = 'button-survey'
        if (this.props.turnedOn === true) {
            buttonClassName = 'button-survey active'
        }
        return (
            <div onClick={this.props.handleClick} className={buttonClassName}>
                {this.props.name}
            </div>  
        )
    }
}

export default ButtonSurvey