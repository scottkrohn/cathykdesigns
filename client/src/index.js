import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Redux Imports 
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import rootReducer from './reducers/root-reducer';

import thunk from "redux-thunk";

import "../node_modules/jquery/dist/jquery.min.js";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './app';

const allStoreEnhancers = compose(
	applyMiddleware(thunk),
	window.devToolsExtension && window.devToolsExtension()
);

const allReducers = combineReducers(rootReducer);
const store = createStore(allReducers, {}, allStoreEnhancers);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { applyMiddleware, compose, createStore, combineReducers } from "redux";
// import { Provider } from "react-redux";
// import { BrowserRouter, Route } from "react-router-dom";

// import rootReducer from "./reducers/rootReducer";
// import thunk from "redux-thunk";

// import "./index.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/font-awesome/css/font-awesome.min.css";

// const allReducers = combineReducers(rootReducer);

// const allStoreEnhancers = compose(
// 	applyMiddleware(thunk),
// 	window.devToolsExtension && window.devToolsExtension()
// );

// const store = createStore(allReducers, {}, allStoreEnhancers);

// ReactDOM.render(
// 	<Provider store={store}>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</Provider>,
// 	document.getElementById("root")
// );
