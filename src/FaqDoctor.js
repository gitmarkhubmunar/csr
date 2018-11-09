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
								<div className="link-styling">
									<ExpandedContent
										content="How to Offer Prognostic Information to a Patient" 
										// image={<img src="../assets/prog.talk.png" />}
										siteRef="vitaltalk.org"
										time="2:49 m" 
									/>
									<iframe 
									className="imbed-margins imbed-mobile"
									width="416" height="234" 
									src="https://player.vimeo.com/video/85771692" 
									frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
									allowfullscreen>
									</iframe>
									<ExpandedContent
										content="Quick Guide for Discussing Prognosis" 
										content={<a href="https://vitaltalk.org/resources/quick-guides/" target="_blank">Quick Guide for Discussing Prognosis</a>}
										// image={<img className="prog-icon" src="../assets/quickguide.snapshot" />}
										// image={<img src="../assets/prog.talk.png" />}
										siteRef="vitaltalk.org"
										style={{ marginTop: '1em' }}
										time="10 min"
									/>
									<img className="snapshot" src="../assets/quickguide.snapshot.png" />
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
