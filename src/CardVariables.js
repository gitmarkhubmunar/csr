import Icon from 'react-ionicons'
import React from 'react'

class CardVariables extends React.Component {
    render () {
        const {
            age,
            diagnosed,
            grade,
            sex,
            stage,
        } = this.props;
        return (
            <div className="variables flex-row">
    		    <div className="variable-switch">
                    <Icon icon="ios-transgender" />
                    <div>Sex</div>
                    <div>{sex}</div>
                </div>
                <div className="variable-switch">
                    <Icon icon="ios-alarm" />
                    <div>Age</div>
                    <div>{age}</div>
                </div>
                <div className="variable-switch">
                    <Icon icon="ios-bug" />
                    <div>Grade</div>
                    <div>{grade}</div>
                </div>
                <div className="variable-switch">
                    <Icon icon="ios-flower" />
                    <div>Stage</div>
                    <div>{stage}</div>
                </div>
                <div className="variable-switch">
                    <Icon icon="ios-calendar" />
                    <div>Diagnosed</div>
                    <div>{diagnosed}</div>
                </div>
    		</div>
        )
    }
}

export default CardVariables
