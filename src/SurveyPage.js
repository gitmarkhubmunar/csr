import React from 'react'

import Card from './Card'
import CourageVoice from './CourageVoice'
import Faq from './Faq'
import QuestionDrawer from './QuestionDrawer'

class SurveyPage extends React.Component {
    state = {
        age: null,
        diagnosed: 0, // Assuming this is time since diagnosis in months.
        grade: null,
        rate: null,
        selectedCancerType: 'liver',
        sex: null,
        stage: null,
    }

    calculateCsr = () => {
        // TODO: Connect to real survival-rate function/calculator.
        const newRate = Math.round(Math.random(0, 1) * 100)
        this.setState({ rate: newRate })
    }

    changeValue = (key, value) => {
        this.setState({ [key]: value })
        this.calculateCsr()
    }

    render () {
        const { age, diagnosed, grade, rate, sex, selectedCancerType, stage } = this.state
        return (
            <div className="survey-page">
                <Card
                    changeValue={this.changeValue}
                    rate={rate}
                    selectedCancerType={selectedCancerType}
                />
                <QuestionDrawer
                    age={age}
                    changeValue={this.changeValue}
                    diagnosed={diagnosed}
                    grade={grade} 
                    sex={sex}
                    stage={stage}
                    selectedCancerType={selectedCancerType}
                />
                <Faq />
            </div>
        )
    }
}

export default SurveyPage
