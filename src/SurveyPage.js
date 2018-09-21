import React from 'react'

import Card from './Card'
import CourageHealthPanel from './CourageHealthPanel'
import CourageVoice from './CourageVoice'
import Faq from './Faq'
import FaqTwo from './FaqTwo'
import FaqDoctor from './FaqDoctor'
import Footer from './Footer'
import QuestionDrawer from './QuestionDrawer'

class SurveyPage extends React.Component {
    constructor (props) {
        super(props)
        const historyState = this.props.history.location.state || {}
        this.state = {
            age: 30,
            diagnosed: 3, // Assuming this is time since diagnosis in months.
            grade: '1',
            isPatient: historyState.isPatient || true,
            rate: null,
            selectedCancerType: historyState.selectedCancerType || 'liver',
            sex: null,
            stage: '1',
        }
    }

    componentDidMount = () => {
        this.calculateCsr()
    }

    calculateCsr = () => {
        // TODO: Connect to real survival-rate function/calculator.
        const newRate = Math.round(Math.random(0, 1) * 100)
        this.setState({ rate: newRate })
    }

    changeValue = (key, value) => {
        this.setState({ [key]: value })
        if (key === 'isPatient') {
            return // Don't calculate when switching between patient/doctor view.
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
                    age={age}
                    changeValue={this.changeValue}
                    diagnosed={diagnosed}
                    grade={grade} 
                    isPatient={isPatient}
                    rate={rate}
                    selectedCancerType={selectedCancerType}
                    sex={sex}
                    stage={stage}
                />
                <div className={questionDrawerContainerClassName}> 
                    <QuestionDrawer
                        age={age}
                        changeValue={this.changeValue}
                        diagnosed={diagnosed}
                        grade={grade} 
                        selectedCancerType={selectedCancerType}
                        sex={sex}
                        stage={stage}
                    />
                </div>
                {isPatient === false && <FaqDoctor />}
                {isPatient === true && <Faq />}
                {isPatient === true && <FaqTwo />}
                <CourageHealthPanel />
                <Footer />
            </div>
        )
    }
}

export default SurveyPage
