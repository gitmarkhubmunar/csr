import React from 'react'

import CardStatistics from './CardStatistics'
import CardTitleBar from './CardTitleBar'
import NoCalcPatient from './NoCalcPatient'
import NoCalcPatientGrid from './NoCalcPatientGrid'
import NoCalcDoctor from './NoCalcDoctor'

class Card extends React.Component {
    // <NoCalcPatientGrid />
    // <NoCalcDoctor />
    render () {
        const { changeValue, isPatient, rate, selectedCancerType } = this.props
        return (
            <div className="card">
                <div className="title-bar-container">
            		<CardTitleBar
                        className="card-title-bar"
                        changeValue={changeValue}
                        isPatient={isPatient}
                        selectedCancerType={selectedCancerType}
                    />
                </div>
        		<CardStatistics
                    rate={rate}
                    selectedCancerType={selectedCancerType}
                />
            </div>
        )
    }
}

export default Card
