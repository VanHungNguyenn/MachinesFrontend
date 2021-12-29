import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from 'components/utils/NotFound'
import Loading from 'components/utils/Loading'
import Header from 'components/Header'

// Lazy load - Code splitting
const Body = React.lazy(() => import('./components/Body'))

function App() {
	return (
		<div className='machines_app'>
			<Suspense fallback={<Loading />}>
				<BrowserRouter>
					<Header />

					<Switch>
						<Route path='' component={Body} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</div>
	)
}

export default App
