import Icon from 'react-ionicons'
import React from 'react'

class NoCalcPatient extends React.Component {
    render () {
		return ( 
            <div className="patient-alt-container-grid">
                <div></div>
                <div className="alt-header margin">
                     <div className="alt-headline">It depends.</div>
                     <div className="alt-sub flex-center">Survival rates for {this.props.selectedCancer.name} depend on many individual factors. Our recommendation is:</div>
                     <div className="alt-cta blue">Talk to your doctor</div>
                     <img
                        className="alt-image"
                        src="../assets/doctorvisit-icon.svg"
                        style={{ width: '40px' }}
                    />
                </div>
                <div></div>
            </div>
        )
    }
}

export default NoCalcPatient
