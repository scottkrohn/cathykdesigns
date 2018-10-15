import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import HomepageContainer from '../src/containers/homepage-container';
import AboutUsContainer from './containers/about-us-container';
import ContactContainer from './containers/contact-container';

class Router extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={HomepageContainer}/>
				<Route exact path='/about' component={AboutUsContainer}/>
				<Route exact path='/contact' component={ContactContainer}/>
			</Switch>
		);
	}
};

export default Router;