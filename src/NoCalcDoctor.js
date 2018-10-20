import Icon from 'react-ionicons'
import React from 'react'

class NoCalcDoctor extends React.Component {
    render () {
		return (
             <div className="patient-alt-container-grid">
                <div></div>
                <div className="alt-header marginr">
                     <div className="alt-headline">Stay Tuned.</div>
                     <div className="alt-sub flex-center">We currently do not have a calculator or tables for {this.props.selectedCancer.name}.</div>
                     <div className="alt-sub flex-center">Please check back in the future or email info@cancersurvivalrates.org if you would like to inquire further or have questions</div>
                     <img
                        className="alt-image"
                        src="../assets/checkback.svg"
                        style={{ width: '40px' }}
                    />
                </div>
                <div></div>
            </div>
        )
    }
}

export default NoCalcDoctor
