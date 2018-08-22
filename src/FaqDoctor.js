import React from 'react'

import ExpandedContent from './ExpandedContent'
import FaqQuestion from './FaqQuestion'

class FaqDoctor extends React.Component {
	render () {
		return (
			<div className="faq doctor-bg-color">
				<div className="topic-cell">
					<h3>Questions to ask your patient</h3>
					<FaqQuestion
						className="border-bottom-white"
						number={1}
						title="Best practices in talking to patients about life expectancy" 
						content={
							<div>
								<div className="expanded-container">
									<ExpandedContent
									siteRef="vitaltalk.org"
									time="2 min" 
									className="expanded-content"
									content="How to Offer Prognostic Information to a Patient" 
									image={<img src="../assets/prog.talk.png" />} />
								</div>
								<div className="expanded-container">
									<ExpandedContent
									siteRef="vitaltalk.org"
									time="10 min"  
									className="expanded-content"
									content="Quick Guide for Discussing Prognosis" 
									image={<img className="prog-icon" src="../assets/icon.prognosis-chart.svg" />} />
								</div>
							</div>


						}
					/>
					<FaqQuestion
						className=""
						number={2}
						title="About CancerSurvivalRates.Org data and models" 
						content={
							<div>
								<div className="expanded-container">
									<ExpandedContent
									siteRef="Visit our website at:"
									className="expanded-content"
									content="www.courage.health" 
									 />
								</div>
							</div>
						}
					/>
					<FaqQuestion
						className=""
						number={3}
						title="Question? Suggestion?" 
						content={
							<div>
								<div className="expanded-container">
									<ExpandedContent
									siteRef="E-mail us at:"
									className="expanded-content"
									content="info@cancersurvivalrates.org" 
									 />
								</div>
							</div>
						}
					/>
				</div>
			</div>
        )
    }
}

export default FaqDoctor
