import React from 'react'
import { Tooltip } from 'react-tippy';

import CardStatistics from './CardStatistics'
import CardTitleBar from './CardTitleBar'
import ShareCard from './ShareCard'

class Card extends React.Component {
    state = { showShareCard: false }

    toggleShareCard = () => {
        const { showShareCard } = this.state
        this.setState({ showShareCard: !showShareCard })
    }

    render () {
        const {
            changeCancerType,
            changeMode,
            hasCalculator,
            isPatient,
            rate,
            selectedCancerType,
            userData
        } = this.props
        const { showShareCard } = this.state
        return (
            <div className="card">
                <CardTitleBar
                    changeCancerType={changeCancerType}
                    changeMode={changeMode}
                    isPatient={isPatient}
                    selectedCancerType={selectedCancerType}
                    toggleShareCard={this.toggleShareCard}
                />
                {isPatient === false || hasCalculator &&
            		<CardStatistics
                        isPatient={isPatient}
                        rate={rate}
                        selectedCancerType={selectedCancerType}
                        toggleShareCard={this.toggleShareCard}
                        userData={userData}
                    />
                }
                {showShareCard && <ShareCard onClose={this.toggleShareCard} />}
            </div>  
        )
    }
}

export default Card