import React, { Component } from 'react';
import { connect } from "react-redux";

// Actions
import { getShopInformation } from '../actions/shop-actions';

class AboutUsContainer extends Component {
	render() {
		return (
			<div>I'm the about us container</div>
		);
	};
};

const mapStateToProps = state => state;

const mapActionsToProps = {
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(AboutUsContainer);