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
						number={0}
						title="Best practices in talking to patients about life expectancy" 
						content={
							<div className="expanded-container">
								<ExpandedContent 
								content="How to Offer Prognostic Information to a Patient jfklds jflkds fjdslkf jdslkf jsdlkfds fsd fds fds" 
								image={<img src="../assets/prog.talk.png" />} />
							</div>
						}
					/>
					<FaqQuestion
					      className="border-bottom-white"
					      number={1}
					      title="Best practices in talking to patients about life expectancy" 
					      content="How to Offer Prognostic Information to a Patient"
					      contentImage={<img className="collapsible-img" src="../assets/prog.talk.png"/>}
					      content="How to Offer Prognostic Information to a Patient"
					      contentImage={<img className="collapsible-img" src="../assets/prog.talk.png"/>}
					/>
					<FaqQuestion
					  number={2}
					  title="About CancerSurvivalRates.Org data and models" 
					  content="Go to courage.health "
					/>
					<FaqQuestion
					  number={3}
					  title="Question? Suggestion?" 
					  content="Suspendisse ac semper felis. Interdum et malesuada fames ac ante ipsum primis in faucibus."
					/>
				</div>
			</div>
        )
    }
}

export default FaqDoctor
