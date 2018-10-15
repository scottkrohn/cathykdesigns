import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import autobind from 'auto-bind'

class NavLink extends PureComponent {
	constructor(props) {
		super(props);
		autobind(this);
	}

	handleClick() {
		this.props.onClick(this.props.name);
	}

	render() {

		const classNames = ['nav-link'];
		if (this.props.activeName === this.props.name) {
			classNames.push('active');
		}


		return (
			<li className="nav-item">
				<Link onClick={this.handleClick} className={classNames.join(' ')} to={this.props.to}>{this.props.label}</Link>
			</li>
		);
	}
}

export default NavLink;