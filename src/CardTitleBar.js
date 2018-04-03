import Icon from 'react-ionicons'
import React from 'react'
import Switch from 'react-toggle-switch'

class CardTitleBar extends React.Component {
    state = { isPatient: true }

	render () {
		const { title } = this.props;
        const { isPatient } = this.state;
        return (
            <div className="title-bar bg-purple flex-row padding-2">
        		<div className="toggle" style={{ flex: '0 0 20%' }}>
        			<Switch className="patient-switch" onClick={() => this.setState({ isPatient: !isPatient })} on={isPatient === true} />
                    <div className={isPatient === true ? 'role patient' : 'role'}>{isPatient === true ? 'Patient' : 'Doctor'}</div>
        		</div>
        		<div className="text-center" style={{ flex: '1 0 auto' }}>
        			{title}
        		</div>
        		<div style={{ flex: '0 0 20%', textAlign: 'right' }}>
        		  <object className="share-button" data="/assets/share.svg" type="image/svg+xml" />
        		</div>
            </div>
        )
    }
}

export default CardTitleBar
