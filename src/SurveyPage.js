import _ from 'lodash'
import React from 'react'
import QS from 'query-string'
import { withRouter } from 'react-router-dom'

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
            rate: null,
            selectedCancerType,
            userData: {
                age: 30,
                diagnosed: 1, // Assuming this is time since diagnosis in months.
                grade: '1',
                sex: 'female',
                stage: '1',
            },
        }
    }

    componentWillMount () {
        const urlSearch = _.get(this.props.history, 'location.search', null)
        const urlState = QS.parse(urlSearch)
        const { isPatient, selectedCancerType } = urlState
        const urlUserData = _.omit(urlState, ['isPatient', 'selectedCancerType'])
        this.setState({
            isPatient: isPatient || this.state.isPatient,
            selectedCancerType: selectedCancerType || this.state.selectedCancerType,
            userData: {
                ...this.state.userData,
                ...urlUserData,
            }
        }, () => {
            this.updateQueryString()
        })
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
        this.setState({ selectedCancerType }, () => {
            this.calculateCsr()
            this.updateQueryString()
        })
    }

    changeMode = (isPatient: boolean) => {
        this.setState({ isPatient }, () => {
            this.updateQueryString()
        })
    }

    changeValue = (key: string, value: any) => {
        this.setState({
            ...this.state,
            userData: {
                ...this.state.userData,
                [key]: value,
            },
        }, () => {
            this.calculateCsr()
            this.updateQueryString()
        })
    }

    updateQueryString = () => {
        const { isPatient, selectedCancerType, userData } = this.state
        const searchString = QS.stringify({
            isPatient,
            selectedCancerType,
            ...userData,
        });
        this.props.history.push({
            location: this.props.location.pathname,
            search: searchString
        })
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

export default withRouter(SurveyPage)
