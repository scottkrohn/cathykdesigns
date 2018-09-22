import express from 'express';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config.js';
import path from 'path';

const app = express();

const env = app.get('env');
if (env === 'production') {
	app.use(express.static(path.join(__dirname, 'build')))
} else {
	app.use(webpackMiddleware(webpack(webpackConfig)));
}



app.listen(3000, () => {
	console.log('Listening on port 3000');
});
