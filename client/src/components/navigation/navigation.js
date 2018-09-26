import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'jquery';

// Assets
import logo from '../../../assets/images/logo.jpg';

class Navigation extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-light bg-light">
				<Link className="navbar-brand" to="/">
					<img src={logo} className="d-inline-block" height={100} width={100} />
				</Link>

				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navigation;
