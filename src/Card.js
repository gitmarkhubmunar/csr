import React from 'react'

import CardStatistics from './CardStatistics'
import CardTitleBar from './CardTitleBar'

class Card extends React.Component {
    render () {
        return (
            <div className="card">
        		<CardTitleBar title={this.props.cancerType + ' Cancer'} />
        		<CardStatistics rate={this.props.rate} />
            </div>
        )
    }
}

export default Card
