import axios from 'axios';

// TODO: Move etsy API keys somewhere else
const apiKey = '46k8e2iq89ge8gvdp1dwv7f5';

class ShopApi {
	getShop(shopId) {
		return new Promise((resolve, reject) => {
			axios.get(`https://openapi.etsy.com/v2/shops/${shopId}?api_key=${apiKey}`)
				.then((response) => {
					resolve(response);
				})
				.catch((err) => {
					// TODO: Do something with errors.
				});
		});
	}
}

export default ShopApi;