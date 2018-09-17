import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'

import CancerTypes from './data/CancerTypes'
import Heart from './Heart'

class NoCalcPatient extends React.Component {
    render () {
		return (
         
         <div className="patient-alt-container flex-center">
	         <div className="alt-header">It depends.</div>
	         <div className="alt-copy flex-center">Survival rates for [liver] cancer depend on many individual factors. Our recommendation is:</div>
	         <div className="blue">Talk to your doctor.</div>
	         <img className="alt-image" src="../assets/doctorvisit-icon.svg"
	         	 style={{ 
	         	 	width: '80px'
	         	 	 }}/>
		</div>
         
          )
    }
}

export default NoCalcPatient
