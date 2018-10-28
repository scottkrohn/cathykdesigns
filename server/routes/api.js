const express = require('express');
const router = express.Router();

// API Classes
import ShopApi from '../../api/shop';

router.get('/shop', function(req, res) {
	const shopApi = new ShopApi();
	shopApi.getShop('cathykdesigns').then(response => {
		res.json(response.data);
	});
});

module.exports = router;