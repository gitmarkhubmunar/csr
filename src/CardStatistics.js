import Icon from 'react-ionicons'
import React from 'react'

import Heart from './Heart'

class CardStatistics extends React.Component {
	renderIconArray = (rate: number) => {
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
				icon = <Heart key={t} kind="full" />
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
			<div className="heart-parent-container">
				<div className="heart-first-row">{iconArrayFirstRow}</div>
				<div className="heart-second-row">{iconArraySecondRow}</div>
			</div>
		)
	}

	render () {
		const { rate } = this.props;
		return (
			<div className="statistics">
				<div className="stat-header border-bottom flex-row">
					<div className="statistic-line"> 
						<div className="percentage bg-green">
							{rate}%
						</div>
					</div>
					<div className="survival-line" style={{ }}>
						5 year survival rate
					</div>
				</div>
				<div className="stat-viz border-bottom flex-row">
					<div style={{ flex: '0 0 35%', padding: '10px 0' }}>
						<div  className="stat-copy">
							Given a <a className="bold-line">group of ten people</a> with the same type of cancer and profile
						</div>
					</div>
					<div className="icon-array">
						{this.renderIconArray(rate)}
					</div>
				</div>
			</div>
		)
	}
}

export default CardStatistics
