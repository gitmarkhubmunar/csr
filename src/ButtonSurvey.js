import React from 'react'
import cx from 'classnames'

class ButtonSurvey extends React.Component {
    render () {
        const { className, color, handleClick, turnedOn, name, style } = this.props
        const buttonClassName = cx({
            'button-survey': true,
            'active': turnedOn,
            [className]: className
        });
        return (
            <div
                className={buttonClassName}
                onClick={handleClick}
                style={style}
            >
                {name}
            </div>  
        )
    }
}

export default ButtonSurvey
