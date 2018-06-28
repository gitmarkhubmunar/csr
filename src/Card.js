import React from 'react'

import CardStatistics from './CardStatistics'
import CardTitleBar from './CardTitleBar'
import CardVariables from './CardVariables'
import CustomizedQuestions from './CustomizedQuestions'

class Card extends React.Component {
    render () {
        const { switchQuestion } = this.props
        return (
            <div className="card">
        		<CardTitleBar title="Liver Cancer" />
        		<CardStatistics rate={72} />
                <CustomizedQuestions
                    switchQuestion={switchQuestion}
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
