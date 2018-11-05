import React, { Component } from 'react';
import { get, isEmpty } from 'lodash';

import './policy.css';

class Policy extends Component {

	getPolicyMarkup() {
		let markup = '';
		const policy = get(this.props, 'policy');

		if (!isEmpty(policy)) {
			if (Array.isArray(policy)) {
				markup = this.getArrayPolicy(policy);
			}	else {
				markup = this.getRegularPolicy(policy);
			}
		}

		return markup;
	}

	getArrayPolicy(policy) {
		const policyTitle = get(policy, '[0]');
		const policyDetails = policy.slice(1, policy.length);

		return (
			<div className='policy-array'>
				<h5 className='policy-title'>{policyTitle}</h5>
				<ul className='policy-details-list'>
					{policyDetails.map((detail, index) => {
						return (
							<li key={index} className='policy-detail-item'>
								{detail}
							</li>
						);
					})}
				</ul>
			</div>
		);
	}

	getRegularPolicy(policy) {
		return (
			<div className='policy-regular'>
				<span>{policy}</span>
			</div>
		);
	}

	render() {
		return (
			<div>
				{this.getPolicyMarkup()}
			</div>
		);
	}
}

export default Policy;