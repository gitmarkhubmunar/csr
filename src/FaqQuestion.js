import React from 'react'



class FaqQuestion extends React.Component {
	state = { isOpen: false }

	render () {
		const { content, number, title, contentImage } = this.props
		const { isOpen } = this.state
		return (
			<div>
				<div className="faq-question flex-row nowrap" onClick={() => this.setState({ isOpen: !isOpen })}>
					<div className="number-bullet">{number}</div>
					<div className="suggestions">{title}</div>
					<div className="expand-icon">+</div>
				</div>
				<div className="collapsible-container border-bottom-white">
					<div className="collapsible-container"></div>
					{isOpen === true && <div className="collapsible-content">{content}</div>}
					


				<div className="content-margin"></div></div>
			</div>
		)
  	}
}

 {/*<div> <div className="collapsible-content-container"></div> </div>*/}


export default FaqQuestion
