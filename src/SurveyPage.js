import _ from 'lodash'
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
        const isPatient = _.get(props, 'history.location.state.isPatient', true)
        const selectedCancerType = _.get(props, 'history.location.state.selectedCancerType', 'liver')
        this.state = {
            isPatient,
            selectedCancerType,
            userData: {
                age: 30,
                diagnosed: 3, // Assuming this is time since diagnosis in months.
                grade: '1',
                rate: null,
                sex: 'female',
                stage: '1',
            },
        }
    }

    componentDidMount () {
        this.calculateCsr()
    }

    calculateCsr = () => {
        // TODO: Connect to real survival-rate function/calculator.
        const newRate = Math.round(Math.random(0, 1) * 100)
        this.setState({ rate: newRate })
    }

    changeCancerType = (selectedCancerType) => {
        this.setState({ selectedCancerType })
        this.calculateCsr()
    }

    changeMode = (isPatient: boolean) => {
        this.setState({ isPatient })
    }

    changeValue = (key, value) => {
        this.setState({
            ...this.state,
            userData: {
                ...this.state.userData,
                [key]: value,
            }
        })
        this.calculateCsr()
    }

    render () {
        const { isPatient, rate, selectedCancerType, userData } = this.state
        let questionDrawerContainerClassName = 'question-drawer-container'
        if (isPatient === false) {
            questionDrawerContainerClassName = 'question-drawer-container survey-doctor-color'
        }
        
        return (
            <div className="survey-page">
                <Card
                    changeCancerType={this.changeCancerType}
                    changeMode={this.changeMode}
                    isPatient={isPatient}
                    rate={rate}
                    selectedCancerType={selectedCancerType}
                    userData={userData}
                />
                <div className={questionDrawerContainerClassName}> 
                    <QuestionDrawer
                        changeValue={this.changeValue}
                        selectedCancerType={selectedCancerType}
                        userData={userData}
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
