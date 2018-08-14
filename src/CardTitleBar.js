import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'
import Switch from 'react-toggle-switch'

import Dropdown from './Dropdown'
import CancerTypes from './data/CancerTypes'

class CardTitleBar extends React.Component {
    state = { isPatient: true }

	render () {
		const { changeValue, selectedCancerType } = this.props
        const { isPatient } = this.state
        const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
        const color = selectedCancer.colors[0]
        return (
            <div className="title-bar flex-row padding-2" style={{ background: color }}>
            	<div className="toggle" style={{ flex: '0 0 20%' }}>
            		<Switch className="patient-switch" onClick={() => this.setState({ isPatient: !isPatient })} on={isPatient === true} />
                    <div className={isPatient === true ? 'role patient' : 'role'}>{isPatient === true ? 'Patient' : 'Doctor'}</div>
            	</div> 
                <div className="title-dropdown">
                    <Dropdown
                        className="third-dropdown text-center cancer-title"
                        list={CancerTypes.map(type => type.name)}
                        onSelect={name => {
                            const id = _.find(CancerTypes, { name: name }).id
                            changeValue('selectedCancerType', id)
                        }}
                        selectedItem={selectedCancer.name}
                    />
                </div>

        		<div style={{ flex: '0 0 20%', textAlign: 'right' }}>
        		  <object className="share-button" data="/assets/share.svg" type="image/svg+xml" />
        		</div>
            </div>
        )
    }
}

export default CardTitleBar



