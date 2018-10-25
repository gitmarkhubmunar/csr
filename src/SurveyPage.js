import _ from 'lodash'
import React from 'react'

import CancerTypes from './data/CancerTypes'
import Card from './Card'
import CourageHealthPanel from './CourageHealthPanel'
import CourageVoice from './CourageVoice'
import Faq from './Faq'
import FaqDoctor from './FaqDoctor'
import FaqTwo from './FaqTwo'
import Footer from './Footer'
import NoCalcDoctor from './NoCalcDoctor'
import NoCalcPatient from './NoCalcPatient'
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
                diagnosed: 1, // Assuming this is time since diagnosis in months.
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
        const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
        const hasCalculator = _.get(selectedCancer, 'hasCalculator', false)
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
                    hasCalculator={hasCalculator}
                    selectedCancerType={selectedCancerType}
                    userData={userData}
                />
                 {isPatient === false || hasCalculator ?
                    <div className={questionDrawerContainerClassName}> 
                        <QuestionDrawer
                            changeValue={this.changeValue}
                            selectedCancerType={selectedCancerType}
                            userData={userData}
                        />
                    </div>
                    :
                    <div>
                        {isPatient ?
                            <NoCalcPatient selectedCancer={selectedCancer} />
                            :
                            <NoCalcDoctor selectedCancer={selectedCancer} />
                        }
                    </div>
                }
                {isPatient === false && <FaqDoctor />}
                {isPatient === true && <Faq />}
                {isPatient === true && <FaqTwo />}
                <Footer />
            </div>
        )
    }
}

export default SurveyPage
