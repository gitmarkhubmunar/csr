import isMobile from 'is-mobile';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './Home'
import Card from './Card'

class App extends React.Component {
	render () {
		const props = this.props

		// Render our custom home page component
		const renderHomePage = (props) => {
			return <Home {...props} />
		}

		// Render our custom client page component
		const renderCardPage = (props) => {
			return <Card {...props} />
		}

		return (
		  <Router {...props}>
		  	<div>
		  		<Route exact path='/' render={renderHomePage} />
			    <Route path='/card' render={renderCardPage} />
			</div>
		  </Router>
		)
	}
}

export default App
