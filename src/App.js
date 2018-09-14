import isMobile from 'is-mobile'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Faq from './Faq'
import FaqDoctor from './FaqDoctor'
import AlternateMessage from './AlternateMessage'
import CourageHealthPanel from './CourageHealthPanel'
import Footer from './Footer'
import Header from './Header'
import HomePage from './HomePage'
import SurveyPage from './SurveyPage'

class App extends React.Component {
	render () {
		const props = this.props
		//<AlternateMessage />
		// Render our custom home page component 
		// I took the header out 

		
				const renderHomePage = (props) => {
			return <HomePage {...props} />
		}


		return (
		  <Router {...props}>
			  <div>

			  	// toggle the visibility with the following element using javascript and the css style "display: none"

				// div className="blackout">
				// div className="blackout-modal">
				// ugh.
				/// div>
				/// div>

			  	<div className="app">
			  		
			  		<Route exact path='/' render={renderHomePage} />
				    <Route path='/card' component={SurveyPage} />
				</div>
			  </div>
			
		  </Router>
		)
	}
}

export default App
