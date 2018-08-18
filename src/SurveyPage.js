import React from 'react'

import Card from './Card'
import CourageVoice from './CourageVoice'
import Faq from './Faq'
import FaqDoctor from './FaqDoctor'
import QuestionDrawer from './QuestionDrawer'
import CourageHealthPanel from './CourageHealthPanel'
import Footer from './Footer'


class SurveyPage extends React.Component {
    state = {
        age: null,
        diagnosed: 0, // Assuming this is time since diagnosis in months.
        grade: null,
        isPatient: true,
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
        // Don't calculate a new rate when switching patient > doctor view.
        if (key === 'isPatient') {
            return
        }
        this.calculateCsr()
    }

    render () {
        const {
            age,
            diagnosed,
            grade,
            isPatient,
            rate,
            sex,
            selectedCancerType,
            stage
        } = this.state
        let questionDrawerContainerClassName = 'question-drawer-container'
        if (isPatient === false) {
            questionDrawerContainerClassName = 'question-drawer-container survey-doctor-color'
        }
        return (
            <div className="survey-page">
                <Card
                    changeValue={this.changeValue}
                    isPatient={isPatient}
                    rate={rate}
                    selectedCancerType={selectedCancerType}
                />
                <div className={questionDrawerContainerClassName}> 
                    <QuestionDrawer
                        age={age}
                        changeValue={this.changeValue}
                        diagnosed={diagnosed}
                        grade={grade} 
                        sex={sex}
                        stage={stage}
                        selectedCancerType={selectedCancerType}
                    />
                </div>
                
                {isPatient === false && <FaqDoctor />}
                {isPatient === true && <Faq />}

                <CourageHealthPanel />
                <Footer />
            </div>
        )
    }
}

export default SurveyPage
