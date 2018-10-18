import Icon from 'react-ionicons'
import React from 'react'

class NoCalcPatient extends React.Component {
    render () {
		return ( 
            <div className="patient-alt-container-grid flex-center">
                <div></div>
                <div className="nested alt-header flex-center">
                     <div>It depends.</div>
                     <div className="alt-copy flex-center">Survival rates for {this.props.selectedCancer.name} depend on many individual factors. Our recommendation is:</div>
                     <div className="blue">Talk to your doctor.</div>
                     <img
                        className="alt-image"
                        src="../assets/doctorvisit-icon.svg"
                        style={{ width: '80px' }}
                    />
                </div>
                <div></div>
            </div>
        )
    }
}

export default NoCalcPatient
