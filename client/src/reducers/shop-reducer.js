import { get } from 'lodash';

import { SHOP_INFO_REQUEST, SHOP_INFO_ERROR, SHOP_INFO_SUCCESS } from '../actions/shop-actions';

const initialState = null;

function shopReducer(state = initialState, { type, payload }) {
	switch (type) {
		case SHOP_INFO_REQUEST: {
			return {
				loading: true,
				error: false,
				...state,
			};
		}
		case SHOP_INFO_SUCCESS: {
			return {
				loading: false,
				error: false,
				shopInformation: parseShopInformation(payload.shopInformation),
				...state,
			};
		}
		case SHOP_INFO_ERROR: {
			return {
				loading: false,
				error: true,
				errorInfo: payload.errorInfo,
				...state,
			};
		}
		default: {
			return state;
		}
	}
}

function parseShopInformation(shopInformation) {
	const result = get(shopInformation, 'data.results[0]', null);

	let info = {};

	if (result) {
		info = result;
	}

	console.log(JSON.stringify(info));
	return info;
}

export default shopReducer;