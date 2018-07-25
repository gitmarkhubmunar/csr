import React from 'react'

class ButtonSurvey extends React.Component {
    state = {
        turnedOn: false
    }

    click = () => {
        if (this.state.turnedOn === true) {
            this.setState({ turnedOn: false })
        }
        else if (this.state.turnedOn === false) {
            this.setState({ turnedOn: true })
        }
    }

    render () {
        let x = 'button-survey'
        if (this.state.turnedOn === true) {
            x = 'button-survey active'
        }
        return (
            <div onClick={this.click} className={x}>
                {this.props.name}
            </div>  
        )
    }
}

export default ButtonSurvey