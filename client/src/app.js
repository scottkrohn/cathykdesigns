import React, { Component } from 'react';

import Router from './router';
import Navigation from './components/navigation/navigation';

import { Route } from 'react-router-dom';

// Styles
import './app.css';

class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Navigation className='app-navigation' />
				<Router />
			</div>
		);
	}
}

export default App;
