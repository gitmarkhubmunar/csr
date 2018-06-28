import React from 'react'

import CardStatistics from './CardStatistics'
import CardTitleBar from './CardTitleBar'

class Card extends React.Component {
    render () {
        return (
            <div className="card">
        		<CardTitleBar title="Liver Cancer" />
        		<CardStatistics rate={72} />
            </div>
        )
    }
}

export default Card
