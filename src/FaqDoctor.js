import React from 'react'

import FaqQuestion from './FaqQuestion'

class FaqDoctor extends React.Component {
    render () {
        return (
          <div className="faq doctor-bg-color">
          <div></div>
          <div className="topic-cell">
              <h3>Questions to ask your patient</h3>

              <FaqQuestion
                  number={1}
                  title="Best practices in talking to patients about life expectancy" 
                  content="2-min Video: How to Offer Prognostic Information to a Patient http://vitaltalk.org/topics/offer-prognostic-information/ Quick Guide for Discussing Prognosis: http://vitaltalk.org/guides/discussing-prognosis/
" 
              
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
            <div></div>
            </div>
        )
    }
}

export default FaqDoctor
