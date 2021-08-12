import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import PageNotFound from 'PageNotFound'
import Header from './common/Header';
import Dashboard from './core/Dashboard';
import PrivateRoute from './authentication/PrivateRoute';
import LoginPage from './authentication/LoginPage';
import SignUpPage from './authentication/SignUpPage';

const App = () => {
	return (
		<>
			<Header />
			<Switch>
				<PrivateRoute exact path="/" component={Dashboard} />
				<Route path="/login" component={LoginPage} />
				<Route path="/sign-up" component={SignUpPage} />
				{/* <Route component={PageNotFound} /> */}
			</Switch>
		</>
	);
};

export default App;
