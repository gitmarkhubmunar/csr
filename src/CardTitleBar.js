import 'react-tippy/dist/tippy.css'
import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'
import Switch from 'react-toggle-switch'

import CancerTypes from './data/CancerTypes'
import Dropdown from './Dropdown'

class CardTitleBar extends React.Component {
    render () {
		const { changeValue, isPatient, selectedCancerType, toggleShareCard } = this.props
        const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
        const color = selectedCancer.colors[0]
        const contrastColor = selectedCancer.contrastColor || 'white'
        const ribbon = selectedCancer.ribbonFile
        return (
            <div className="title-bar" style={{ background: color }}>
                <div className="toggle-switch-container">
                    <div className="toggle" >
                        <Switch
                            className="toggle-switch" 
                            onClick={() => changeValue('isPatient', !isPatient)} 
                            on={isPatient === true}
                        />
                        <div style={{ color: contrastColor }}  className={isPatient === true ? 'role patient' : 'role'}>
                            {isPatient === true ? 'Patient' : 'Doctor'}
                        </div>
                    </div>
                </div>
                <div className="title-dropdown-container">
                    <Dropdown
                        className="title-dropdown text-center cancer-title"
                        list={CancerTypes.map(type => type.name)}
                        onSelect={name => {
                            const id = _.find(CancerTypes, { name: name }).id
                            changeValue('selectedCancerType', id)
                        }}
                        selectedItem={selectedCancer.name}
                    />
                    {ribbon &&
                        <object
                            className="ribbon"
                            data={`/assets/${ribbon}`}
                            style={{ background: 'rgba(255,255,255,.2)', padding: 10 }}
                            type="image/svg+xml"
                        />
                    }
                </div>
                <div className="share-container">
                    <object
                        className="share-button"
                        data="/assets/share.svg"
                        type="image/svg+xml"
                    />
                    <div className="share-button-transparent" onClick={() => toggleShareCard()} />
                </div>
            </div>
        )
    }
}

export default CardTitleBar
