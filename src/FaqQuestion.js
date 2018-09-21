import React from 'react'

class FaqQuestion extends React.Component {
	state = { isOpen: false }

	render () {
		const { className, content, number, title, contentImage } = this.props
		const { isOpen } = this.state
		const combinedClassName = 'border-bottom-white ' + className
		return (
			<div className={combinedClassName}>
				<div className="faq-question flex-row nowrap" onClick={() => this.setState({ isOpen: !isOpen })}>
					<div className="number-bullet">{number}</div>
					<div className="suggestions">{title}</div>
					<div className="expand-icon">
						{isOpen ?
							<span>–</span>
							:
							<span>+</span>
						}
					</div>
				</div>
				{isOpen &&
					<div className="faq-expanded flex-row nowrap">
						<div />
						<div>{content}</div>
					</div>
				}
			</div>
		)
  	}
}

export default FaqQuestion
