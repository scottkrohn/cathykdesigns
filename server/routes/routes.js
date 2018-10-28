var apiRoutes = require('./api');

module.exports = function(app) {
	app.use('/api', apiRoutes);
};