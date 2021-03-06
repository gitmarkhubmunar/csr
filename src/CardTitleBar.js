import 'react-tippy/dist/tippy.css'
import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'
import Switch from 'react-toggle-switch'

import CancerTypes from './data/CancerTypes'
import Dropdown from './Dropdown'

class CardTitleBar extends React.Component {
    render () {
		const {
            changeCancerType,
            changeMode,
            changeValue,
            isPatient,
            selectedCancerType,
            toggleShareCard
        } = this.props
        const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
        const color = selectedCancer.colors[0]
        const contrastColor = selectedCancer.contrastColor || 'white'
        const ribbon = selectedCancer.ribbonFile
        return (
            <div className="title-bar bg-blue">
                <div className="title-bar-container content-container">
                    <div className="toggle-switch-container">
                        <div className="toggle" >
                            <Switch
                                className="toggle-switch" 
                                onClick={() => changeMode(!isPatient)}
                                on={isPatient === false}
                            />
                            <div style={{ color: contrastColor }}  className={isPatient === true ? 'role patient' : 'role'}>
                                {isPatient === true ? 'Patient' : 'Doctor'}
                            </div>
                        </div>
                    </div>
                    <div className="title-dropdown-container relative mobile-dropdown-center">
                        <Dropdown
                            className="card-dropdown text-center cancer-title title-caret"
                            list={CancerTypes.map(type => type.name)}
                            onSelect={name => {
                                const id = _.find(CancerTypes, { name: name }).id
                                changeCancerType(id)
                            }}
                            selectedItem={selectedCancer.name}
                            bgColor={'white'}
                        />
                    </div>
                    <div className="share-container">
                        <Icon icon="ios-share-alt" fontSize="2rem" style={{ fill: 'white' }}/>
                        <div className="share-button-transparent" onClick={() => toggleShareCard()} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CardTitleBar
