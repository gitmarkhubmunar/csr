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
			let icon = 'ios-heart-outline'
			if (t <= filledHeartsCount) {
				icon = 'ios-heart'
			}

			// If t <= 5, put in first row; else put in second row.
			if (t <= 5) {
				iconArrayFirstRow.push(<Icon key={t} icon={icon} />)
			}
			else {
				iconArraySecondRow.push(<Icon key={t} icon={icon} />)
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
        			<div
        				className="purple padding-3"
        				style={{
        					fontSize: '50px',
        					flex: '0 1 30%'
        				}}
        			>
        				{rate}%
        			</div>
        			<div className="padding-3 font-size-3">5 year survival rate</div>
        		</div>
        		<div className="border-bottom flex-row">
        			<div className="padding-3 font-size-1" style={{ flex: '0 1 30%' }}>
        				Given a group of ten people with the same type of cancer and profile</div>
        			<div className="padding-3">
        				{this.renderIconArray(rate)}
        			</div>
        		</div>
            </div>
        )
    }
}

export default CardStatistics
