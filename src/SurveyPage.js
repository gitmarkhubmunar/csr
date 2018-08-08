 import React from 'react'

import Card from './Card'
import CourageVoice from './CourageVoice'
import QuestionDrawer from './QuestionDrawer'
import Faq from './Faq'


class SurveyPage extends React.Component {
    state = {
        age: null,
        cancerType: 'Liver',
        diagnosed: null, // TODO: How is "diagnosed date" stored? Date? Number? Text?
        grade: null,
        rate: null,
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
        console.log('I was triggered during render')
        const { age, cancerType, diagnosed, grade, rate, sex, stage } = this.state
        return (
            <div className="survey-page">
                <Card cancerType={cancerType} rate={rate} />
                  <QuestionDrawer
                    age={age} 
                    changeValue={this.changeValue}
                    diagnosed={diagnosed}
                    grade={grade} 
                    sex={sex}
                    stage={stage}
                />
                <Faq  />
                <CourageVoice />
            </div>
        )
    }
}



export default SurveyPage
