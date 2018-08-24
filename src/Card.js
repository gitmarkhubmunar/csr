import React from 'react'

import CardStatistics from './CardStatistics'
import CardTitleBar from './CardTitleBar'
import NoCalcPatient from './NoCalcPatient'
import NoCalcPatientGrid from './NoCalcPatientGrid'
import NoCalcDoctor from './NoCalcDoctor'
import ShareCard from './ShareCard'

class Card extends React.Component {
    // <NoCalcPatientGrid />
    // <NoCalcDoctor />
    state = { showShareCard: false }

    toggleShareCard = () => {
        const { showShareCard } = this.state
        this.setState({ showShareCard: !showShareCard })
    }

    render () {
        const {
            age,
            changeValue,
            diagnosed,
            grade,
            isPatient,
            rate,
            sex,
            selectedCancerType,
            stage
        } = this.props
        const { showShareCard } = this.state
        return (
            <div className="card">
                <div className="title-bar-container">
            		<CardTitleBar
                        changeValue={changeValue}
                        isPatient={isPatient}
                        selectedCancerType={selectedCancerType}
                        toggleShareCard={this.toggleShareCard}
                    />
                </div>
        		<CardStatistics
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
                {showShareCard && <ShareCard />}
            </div>
            
        )
    }
}

export default Card
