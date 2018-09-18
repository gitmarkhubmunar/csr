import React from 'react'

import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'

class FaqDoctor extends React.Component {
	render () {
		return (
			<div className="faq doctor-bg-color">
				<div className="content-container">
					<div className="faq-content">
						<h3>Additional resources</h3>
						<FaqQuestion
							className="border-top-white"
							number={1}
							title="Best practices in talking to patients about life expectancy" 
							content={
								<div>
									<ExpandedContent
										content="How to Offer Prognostic Information to a Patient" 
										image={<img src="../assets/prog.talk.png" />}
										siteRef="vitaltalk.org"
										time="2 min" 
									/>
									<ExpandedContent
										content="Quick Guide for Discussing Prognosis" 
										image={<img className="prog-icon" src="../assets/icon.prognosis-chart.svg" />}
										siteRef="vitaltalk.org"
										style={{ marginTop: '1em' }}
										time="10 min"  
									/>
								</div>
							}
						/>
						<FaqQuestion
							number={2}
							title="About CancerSurvivalRates.Org data and models" 
							content={
								<ExpandedContent
									siteRef="Visit our website at:"
									content="www.courage.health" 
								/>
							}
						/>
						<FaqQuestion
							number={3}
							title="Question? Suggestion?" 
							content={
								<ExpandedContent
									siteRef="E-mail us at:"
									content="info@cancersurvivalrates.org" 
								/>
							}
						/>
					</div>
				</div>
			</div>
        )
    }
}

export default FaqDoctor
