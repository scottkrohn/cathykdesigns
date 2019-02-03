import React, { Component } from 'react';
import { connect } from "react-redux";

// Actions
import { getShopInformation } from '../actions/shop-actions';

// Components
import Policies from '../components/policies/policies';

class AboutUsContainer extends Component {
	render = () => {
		return (
			<Policies />
		);
	}
}

const mapStateToProps = state => state;

const mapActionsToProps = {
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(AboutUsContainer);