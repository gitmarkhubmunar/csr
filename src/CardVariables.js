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
                    <div style={{ width: '30%' }} className="topic">sex</div>
                    <div style={{ width: '33%' }}><object className="variable-icon" data="/assets/sex.svg" type="image/svg+xml" /></div>
                    <div style={{ width: '39%' }} className="input">{sex}</div>
                </div>
                <div onClick={() => switchQuestion('sex')} className="variable-switch-unanswered">
                   
                    <div><object className="variable-icon-unanswered" data="/assets/sex.svg" type="image/svg+xml" /></div>
                     <div className="topic">sex</div>
                </div>

                <div onClick={() => switchQuestion('age')} className="variable-switch">
                    <div className="topic">age</div>
                    <div><object className="variable-icon" data="/assets/age.svg" type="image/svg+xml" /></div>
                    <div className="input">{age}</div>
                </div>
                <div onClick={() => switchQuestion('stage')} className="variable-switch">
                    <div><object className="variable-icon" data="/assets/stage.svg" type="image/svg+xml" /></div>
                    <div className="topic">stage</div>
                    <div className="input">{stage}</div>
                </div>
                <div onClick={() => switchQuestion('grade')} className="variable-switch">
                    <div className="topic">grade</div>
                    <div><object className="variable-icon" data="/assets/grade.svg" type="image/svg+xml" /></div>
                    <div className="input">{grade}</div>
                </div>
                <div onClick={() => switchQuestion('diagnosed')} className="variable-switch">
                    <div className="topic">diagnosed</div>
                    <div><object className="variable-icon" data="/assets/diagnosed.svg" type="image/svg+xml" /></div>
                    <div className="input">{diagnosed}</div>
                </div>
    		</div>
        )
    }
}

export default CardVariables
