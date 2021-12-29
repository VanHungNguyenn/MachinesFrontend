import NotFound from 'components/utils/NotFound'
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import LoginPage from './LoginPage'

const Body = (props) => {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/login' component={LoginPage} />
				<Route component={NotFound} />
			</Switch>
		</div>
	)
}

export default Body
