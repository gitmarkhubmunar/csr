import _ from 'lodash'
import CountUp from 'react-countup'
import Icon from 'react-ionicons'
import React from 'react'

import CancerTypes from './data/CancerTypes'
import Heart from './Heart'
import Ribbon from './Ribbon'

class CardStatistics extends React.Component {
	componentWillMount () {
		this.setState({
			lastRate: 0,
			nextRate: this.props.rate,
		})
	}

	componentWillReceiveProps (nextProps) {
		this.setState({
			lastRate: this.props.rate,
			nextRate: nextProps.rate,
		})
	}

	renderIconArray = () => {
		const { rate, selectedCancerType } = this.props
		const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
		const color = selectedCancer.colors[0]
		const totalHearts = 10;
		const filledHeartsCount = Math.round(rate / 10);

		// For the first 4 (a.k.a. filledHeartsCount),
		// draw a filled heart. For the rest, draw a outline heart.
		const iconArrayFirstRow = [];
		const iconArraySecondRow = [];
		for (let t = 1; t <= totalHearts; t++) {
			// Use the correct icon; by default it's the outline,
			// but filled in when t <= filledHeartsCount.
			let icon = <Heart key={t} kind="empty" />
			if (t <= filledHeartsCount) {
				icon = <Heart color={color} key={t} kind="full" />
			}

			// If t <= 5, put in first row; else put in second row.
			if (t <= 5) {
				iconArrayFirstRow.push(icon)
			}
			else {
				iconArraySecondRow.push(icon)
			}
		}

		return (
			<div className="icon-array">
				<div className="icon-array-row">{iconArrayFirstRow}</div>
				<div className="icon-array-row">{iconArraySecondRow}</div>
			</div>
		)
	}

	render () {
		const { isPatient, rate, selectedCancerType, toggleShareCard, userData} = this.props
    	const { age, diagnosed, grade, sex, stage } = userData
		const { lastRate, nextRate } = this.state
		const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
		const color = selectedCancer.colors[0]
		const hasAnsweredAnyQuestion = age || diagnosed || grade || sex || stage
		const hasAnsweredAllQuestions = age && diagnosed && grade && sex && stage
		const showRelativeRate = selectedCancer.isRelativeRate || false
		return (
			<div className="statistics">
				<div className="content-container">
					<div className="statistics-container statistics-header relative">						
						<div className="percentage" style={{ color: 'black' }}>
							{rate &&
								<CountUp
									duration={1}
									end={nextRate}
									start={lastRate}
									suffix="%"
									useEasing={false}
								/>
							}
						</div>
						<div className="statistics-copy big">
							5 Year {showRelativeRate ? 'Relative' : 'Conditional'} Survival Rate
							<Ribbon selectedCancerType={selectedCancerType} />
						</div>
						
					</div>
					<div className="statistics-container statistics-viz border-top-alt">
						<div  className="statistics-copy secondary-sub-copy">
							Given a <a className="bold-line">group of ten people</a> with the same type of cancer and profile
						</div>
						<div className="icon-array-container">
							<div className="icon-array-child">
								{this.renderIconArray()}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default CardStatistics
