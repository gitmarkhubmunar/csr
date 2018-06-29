import Icon from 'react-ionicons'
import React from 'react'

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
			let icon = <object className="heart-icon" data="/assets/emptyheart.svg" type="image/svg+xml" />
			if (t <= filledHeartsCount) {
				icon = <object className="heart-icon" data="/assets/heart.svg" type="image/svg+xml" />
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
			<div>
				<div>{iconArrayFirstRow}</div>
				<div>{iconArraySecondRow}</div>
			</div>
		)
	}

	render () {
		const { rate } = this.props;
		return (
			<div className="statistics">
				<div className="border-bottom flex-row">
					
					<div className="statistic-line"> 
								<div className="percentage bg-green">
									{rate}%
								</div>
							</div>
							<div 
								className="survival-line"
								style={{  }}
							>
								5 year survival rate
							</div>
				</div>
				<div className="border-bottom flex-row">
					<div style={{ flex: '0 0 35%', padding: '10px 0' }}>
						<div  className="stat-copy">
							Given a <b>group of ten people</b> with the same type of cancer and profile</div>
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
