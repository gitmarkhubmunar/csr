import React from 'react'

import CardStatistics from './CardStatistics'
import CardTitleBar from './CardTitleBar'

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
            </div>
        )
    }
}

export default Card
