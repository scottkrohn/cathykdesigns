import axios from 'axios';

export const SHOP_INFO_REQUEST = 'shop:shopInfoRequest';
export const SHOP_INFO_SUCCESS = 'shop:shopInfoSuccess';
export const SHOP_INFO_ERROR = 'shop:shopInfoError';

function getShopInformationRequest() {
	return {
		type: SHOP_INFO_REQUEST,
		payload: {},
	};
}

function getShopInformationSuccess(shopInformation) {
	return {
		type: SHOP_INFO_SUCCESS,
		payload: {
			shopInformation,
		},
	};
}

function getShopInformationError(error) {
	return {
		type: SHOP_INFO_ERROR,
		payload: {
			errorInfo: error,
		},
	};
}

export function getShopInformation(storeName) {
	return (dispatch) => {
		dispatch(getShopInformationRequest());

		axios.get(`/api/shop`)
			.then((response) => {
				dispatch(getShopInformationSuccess(response));
			})
			.catch((error) => {
				dispatch(getShopInformationError(error));
			});
	};
}