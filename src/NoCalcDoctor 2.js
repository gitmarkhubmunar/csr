import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'

import CancerTypes from './data/CancerTypes'
import Heart from './Heart'

class NoCalcDoctor extends React.Component {
    render () {
		return (
         
         <div className="patient-alt-container flex-center">
             <div className="alt-header">Stay Tuned.</div>
             <div className="alt-copy flex-center">We currently do not have a calculator or tables for this type of cancer.</div>
             <div className="alt-copy flex-center">Please check back in the future or email info@cancersurvivalrates.org if you would like to inquire further or have questions</div>
             <img className="alt-image" src="../assets/checkback.svg"
                 style={{ 
                    width: '80px'
                     }}/>
        </div>
         
          )
    }
}

export default NoCalcDoctor
