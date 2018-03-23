import Icon from 'react-ionicons'
import React from 'react'

class CardVariables extends React.Component {
    render () {
        const {
            switchQuestion,
            age,
            diagnosed,
            grade,
            sex,
            stage,
        } = this.props;
        return (
            <div className="variables flex-row">
    		    <div onClick={() => switchQuestion('sex')} className="variable-switch">
                    <div style={{ width: '28%' }} className="topic">sex</div>
                    <div style={{ width: '33%' }}><Icon color="white" icon="ios-transgender" /></div>
                    <div style={{ width: '39%' }} className="input">{sex}</div>
                </div>
                <div onClick={() => switchQuestion('age')} className="variable-switch">
                    <div className="topic">age</div>
                    <div><Icon color="white" icon="ios-alarm" /></div>
                    <div className="input">{age}</div>
                </div>
                <div onClick={() => switchQuestion('stage')} className="variable-switch">
                    <div><Icon color="white" icon="ios-flower" /></div>
                    <div className="topic">stage</div>
                    <div className="input">{stage}</div>
                </div>
                <div onClick={() => switchQuestion('grade')} className="variable-switch">
                    <div className="topic">grade</div>
                    <div><Icon color="white" icon="ios-bug" /></div>
                    <div className="input">{grade}</div>
                </div>
                <div onClick={() => switchQuestion('diagnosed')} className="variable-switch">
                    <div className="topic">diagnosed</div>
                    <div><Icon color="white" icon="ios-calendar" /></div>
                    <div className="input">{diagnosed}</div>
                </div>
    		</div>
        )
    }
}

export default CardVariables
