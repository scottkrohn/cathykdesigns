import React, { Component } from 'react';
import { connect } from "react-redux";

// Actions
import { getShopInformation } from '../actions/shop-actions';

class HomepageContainer extends Component {

	componentDidMount = () =>  {
		if (this.props.shop === null) {
			this.props.getShopInformation();
		}
	}

	render = () => {
		return (
			<div>
				I'm the homepage container
			</div>
		);
	}
}

const mapStateToProps = state => state;

const mapActionsToProps = {
	getShopInformation,
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(HomepageContainer);