import React, { Component } from 'react';

import { connect } from "react-redux";

// Actions
import { getShopInformation } from '../../actions/shop-actions';

class Policies extends Component {

	componentDidMount() {
		if (this.props.shop === null) {
			this.props.getShopInformation();
		}
	}

	render() {
		return (
			<div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		shop: state.shop,
	};
};

const mapActionsToProps = {
	getShopInformation,
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(Policies);