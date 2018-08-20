import _ from 'lodash'
import Icon from 'react-ionicons'
import React from 'react'

import CancerTypes from './data/CancerTypes'
import Heart from './Heart'

class CardStatistics extends React.Component {

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
			<div className="icon-parent-container">
				<div className="icon-first-row">{iconArrayFirstRow}</div>
				<div className="icon-second-row">{iconArraySecondRow}</div>
			</div>
		)
	}

	render () {
		const { rate, selectedCancerType } = this.props
		const selectedCancer = _.find(CancerTypes, { id: selectedCancerType })
		const color = selectedCancer.colors[0]
		return (
			<div className="statistics">
				<div></div>
					<div className="stat-whole-container">
						<div className="stat-header border-bottom-alt flex-row">
							
							<div className="statistic-container center"> 
								<div className="percentage" style={{ color: color }}>
									{rate}%
								</div>
							<div className="survival-line">
								5 year survival rate
							</div>
							</div>
							
						</div>
						<div className="stat-viz-container">
							<div className="stat-viz">
								<div  className="stat-copy">
										Given a <a className="bold-line">group of ten people</a> with the same type of cancer and profile
								</div>
								<div className="icon-array">
										{this.renderIconArray()}
									</div>
							
									</div>

						</div>
					</div>
				<div></div>
			</div>
		)
	}
}

export default CardStatistics
