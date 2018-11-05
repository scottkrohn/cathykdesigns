import React, { Component } from 'react';
import { get, indexOf } from 'lodash';

import { connect } from "react-redux";

// Actions
import { getShopInformation } from '../../actions/shop-actions';

// Components
import Policy from '../policy/policy';

class Policies extends Component {

	componentDidMount() {
		if (this.props.shop === null) {
			this.props.getShopInformation();
		}
	}

	getRefundPolicies() {
		const refundPolicy = get(this.props, 'shop.shopInformation.policy_refunds');
		return this.parseSpaceSeparatedArray(refundPolicy);
	}

	getShippingPolicies() {
		const shippingPolicy = get(this.props, 'shop.shopInformation.policy_shipping');
		return this.parseSpaceSeparatedArray(shippingPolicy);
	}

	getPrivacyPolicies() {
		return get(this.props, 'shop.shopInformation.policy_privacy');
	}

	parseSpaceSeparatedArray(policyString) {
		const sections = [];

		if (typeof policyString === 'string') {
			const policyArray = policyString.split('\n');

			let policyLimitCounter = 10;
			while (policyArray.length && policyLimitCounter) {

				let nextEmptyElement = indexOf(policyArray, '');
				nextEmptyElement = (nextEmptyElement !== -1) ? nextEmptyElement : policyArray.length;

				let section = policyArray.splice(0, nextEmptyElement + 1);

				if (section.length) {
					// Filter out the empty elements.
					section = section.filter((element) => (element));
					sections.push(section);
				}

				policyLimitCounter--;
			}
		}

		return sections;
	}

	render() {
		const propsLoading = get(this.props, 'shop.loading');
		const propsError = get(this.props, 'shop.error');

		const refundPolicies = this.getRefundPolicies();
		const shippingPolicies = this.getShippingPolicies();
		const privacyPolicies = this.getPrivacyPolicies();

		console.log(this.props.shop);

		return (
			<div>
				{(!propsLoading && !propsError) && (
					<div>
						<h3>Policies</h3>
						<h4>Refund and Return Policies</h4>
						<div className="return-policies">
							{refundPolicies.map((policy, index) => {
								return (<Policy key={index} policy={policy}/>);
							})}
						</div>

						<hr />
						<h4>Shipping Policies</h4>
						<div className="shipping-policies">
							{shippingPolicies.map((policy, index) => {
								return (<Policy key={index} policy={policy}/>);
							})}
						</div>

						<h4>Privacy Policies</h4>
						<div className="privacy-policies">
							<Policy policy={privacyPolicies} />
						</div>

					</div>
				)
				}
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