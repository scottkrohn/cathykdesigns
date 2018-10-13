import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import "../node_modules/jquery/dist/jquery.min.js";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './app';

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
	, document.getElementById('root'));
