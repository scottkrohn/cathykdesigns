import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import autobind from 'auto-bind';
import { get} from 'lodash';

import { Navbar } from 'react-bootstrap';
import NavLink from './nav-link';

// Assets
import logo from '../../../assets/images/logo.jpg';
import Social from '../social/social';

import './navigation.css';

const PAGE_NAMES = {
	HOME: 'home',
	SHOP: 'shop',
	ABOUT: 'about',
	CONTACT: 'contact',
	FAQ: 'faq',
};

class Navigation extends Component {
	constructor(props) {
		super(props);
		autobind(this);

		const currentPage = this.getCurrentPageName();

		this.state = {
			activeName: currentPage,
		};
	}

	getCurrentPageName() {
		let currentPage = PAGE_NAMES.HOME;

		const pathName = get(window, 'location.pathname', null);
		if (pathName) {
			const pathParts = pathName.split('/').filter((str) => (str));
			if (pathParts.length) {
				currentPage = get(pathParts, '[0]');
			}
		}

		return currentPage;
	}

	setActiveName(name) {
		this.setState({
			activeName: name,
		});
	}

	render() {
		return (
			<div className="navigation-container">
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<div className="brand-wrap">
						<Link
							to="/"
							onClick={() => {this.setActiveName(PAGE_NAMES.HOME);}}
							className="navbar-brand"
						>
							<img src={logo} height={200} width={200}></img>
						</Link>
					</div>
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
						<ul className="navbar-nav mr-auto">
							<NavLink
								to="/"
								onClick={this.setActiveName}
								activeName={this.state.activeName}
								name={PAGE_NAMES.HOME}
								label="Home"
							/>
							<NavLink
								to="/shop"
								onClick={this.setActiveName}
								activeName={this.state.activeName}
								name={PAGE_NAMES.SHOP}
								label="Shop"
							/>
							<NavLink
								to="/about"
								onClick={this.setActiveName}
								activeName={this.state.activeName}
								name={PAGE_NAMES.ABOUT}
								label="About"
							/>
							<NavLink
								to="/contact"
								onClick={this.setActiveName}
								activeName={this.state.activeName}
								name={PAGE_NAMES.CONTACT}
								label="Contact"
							/>
							<NavLink
								to="/faq"
								onClick={this.setActiveName}
								activeName={this.state.activeName}
								name={PAGE_NAMES.FAQ}
								label="FAQ"
							/>
						</ul>
						<span className="social-container">
							<Social />
						</span>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navigation;
