import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

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
			<div className="app">
			  	<Router {...props}>
			  		<Switch>
				  		<Route exact path='/' render={renderHomePage} />
					    <Route path='/card' component={SurveyPage} />
					</Switch>
				</Router>
		  	</div>
		)
	}
}

export default App
