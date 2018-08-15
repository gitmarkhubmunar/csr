import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'

import CancerTypes from './data/CancerTypes'
import Heart from './Heart'

class NoCalcPatientGrid extends React.Component {

    // <div className="patient-alt-container-grid flex-center">
    //          <div className="alt-header">It depends.</div>
    //          <div className="alt-copy flex-center">Survival rates for [liver] cancer depend on many individual factors. Our recommendation is:</div>
    //          <div className="c-blue">Talk to your doctor.</div>
    //          <img className="alt-image" src="../assets/doctorvisit-icon.svg"
    //              style={{ 
    //                 width: '80px'
    //                  }}/>
    //     </div>
    render () {
		return (
         
        <div className="patient-alt-container-grid flex-center">
            <div></div>
            <div className="nested alt-header flex-center">
                 <div className="">It depends.</div>
                 <div className="alt-copy flex-center">Survival rates for [liver] cancer depend on many individual factors. Our recommendation is:</div>
                 <div className="c-blue">Talk to your doctor.</div>
                 <img className="alt-image" src="../assets/doctorvisit-icon.svg"
                     style={{ 
                        width: '80px'
                         }}/>
            </div>
            <div></div>
        </div>
          )
    }
}

export default NoCalcPatientGrid
