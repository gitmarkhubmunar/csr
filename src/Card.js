import React from 'react'

import CardStatistics from './CardStatistics'
import CardTitleBar from './CardTitleBar'
import NoCalcPatient from './NoCalcPatient'
import NoCalcPatientGrid from './NoCalcPatientGrid'
import NoCalcDoctor from './NoCalcDoctor'



class Card extends React.Component {
    render () {
        const { changeValue, rate, selectedCancerType } = this.props
        return (
            <div className="card">
        		<CardTitleBar
                    changeValue={changeValue}
                    selectedCancerType={selectedCancerType}
                />
        		<CardStatistics
                    rate={rate}
                    selectedCancerType={selectedCancerType}
                />
                <NoCalcPatient />
                <NoCalcPatientGrid />
                <NoCalcDoctor />
            </div>
        )
    }
}

export default Card
