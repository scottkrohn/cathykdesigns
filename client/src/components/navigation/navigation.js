import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import autobind from 'auto-bind';

import { Navbar } from 'react-bootstrap';

// Assets
import logo from '../../../assets/images/logo.jpg';
import Social from '../social';

class Navigation extends Component {

	constructor(props) {
		super(props);

		autobind(this);

	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Link to="/" className="navbar-brand"><img src={logo} /></Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item active">
								<Link className="nav-link" to="/about">About<span className="sr-only">(current)</span></Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navigation;
