import React from 'react'

class DeselectButton extends React.Component {
    render () {
        // const { turnedOn, handleClick, name, color, } = this.props
        // let buttonClassName = 'button-survey'
        // if (turnedOn === true) {
        //     buttonClassName = 'button-survey active'
        // }

        return (
            <div className="deselect-container">
                <div className="deselect-button">ON</div> 
                <div className="deselect-button">OFF</div>
            </div>
          
        )
    }
}

export default DeselectButton