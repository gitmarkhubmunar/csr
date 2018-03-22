import React from 'react'

import CardStatistics from './CardStatistics'
import CardTitleBar from './CardTitleBar'
import CardVariables from './CardVariables'

class Card extends React.Component {
    render () {
        return (
            <div className="card">
        		<CardTitleBar title="Liver Cancer" />
        		<CardStatistics rate={72} />
        		<CardVariables
        			age={77}
        			diagnosed="Jan 2016"
        			grade="differentiated"
        			sex="female"
        			stage="3"
        		/>
            </div>
        )
    }
}

export default Card
