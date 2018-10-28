import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import HomepageContainer from '../src/containers/homepage-container';
import ShopContainer from '../src/containers/shop-container';
import AboutUsContainer from './containers/about-us-container';
import ContactContainer from './containers/contact-container';
import FaqContainer from './containers/faq-container';

class Router extends Component {
	render() {
		return (
			<Switch>
				<Route exact path='/' component={HomepageContainer}/>
				<Route exact path='/about' component={AboutUsContainer}/>
				<Route exact path='/contact' component={ContactContainer}/>
				<Route exact path='/shop' component={ShopContainer}/>
				<Route exact path='/faq' component={FaqContainer}/>
			</Switch>
		);
	}
}

export default Router;