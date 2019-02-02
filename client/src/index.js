import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux Imports 
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import rootReducer from './reducers/root-reducer';

import thunk from "redux-thunk";

import '../../node_modules/jquery/dist/jquery.min.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';

import Dialog from '@material-ui/core/Dialog';

import App from './app';

const allStoreEnhancers = compose(
	applyMiddleware(thunk),
	window.devToolsExtension && window.devToolsExtension()
);

const allReducers = combineReducers(rootReducer);
const store = createStore(allReducers, {}, allStoreEnhancers);

ReactDOM.render(
	<div>
		<Dialog open={true}>Hello</Dialog>
	</div>,
	// <Provider store={store}>
	// 	<BrowserRouter>
	// 		<App />
	// 	</BrowserRouter>
	// </Provider>,
	document.getElementById('root')
);