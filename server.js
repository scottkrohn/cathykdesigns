import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import path from 'path';

// TODO: Should prd/dev have different config files?
import webpackConfig from './webpack.config.js';

const app = express();
const env = app.get('env');

if (env === 'production') {
	// Serve static output from webpack for production.
	app.use(express.static(path.join(__dirname, 'build')))
} else {
	// Serve react code with webpack for development.
	app.use(webpackMiddleware(webpack(webpackConfig)));
}

const port = (process.env.PORT || 3000);

app.listen(port, () => {
	console.log(`Server running and listening on port ${port}`);
});
