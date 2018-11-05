import { get } from 'lodash';

import { SHOP_INFO_REQUEST, SHOP_INFO_ERROR, SHOP_INFO_SUCCESS } from '../actions/shop-actions';

const initialState = null;

function shopReducer(state = initialState, { type, payload }) {
	switch (type) {
		case SHOP_INFO_REQUEST: {
			return {
				...state,
				loading: true,
				error: false,
			};
		}
		case SHOP_INFO_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				shopInformation: parseShopInformation(payload.shopInformation),
			};
		}
		case SHOP_INFO_ERROR: {
			return {
				...state,
				loading: false,
				error: true,
				errorInfo: payload.errorInfo,
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

	return info;
}

export default shopReducer;