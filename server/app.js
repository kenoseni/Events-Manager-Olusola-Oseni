import express from 'express';
import volleyball from 'volleyball';
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import config from '.././webpack.config';

import route from './routes';

// Set up the express app
const app = express();
const compiler = webpack(config);
app.use(cors({ credentials: true, origin: true }));
const port = process.env.PORT || 8000;

// Log requests to the console.
app.use(volleyball);

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(require('webpack-dev-middleware')(compiler, {
  hot: true,
  noInfo: false,
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

route(app);
// Set the app entry port

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '.././client/index.html'));
});


app.listen(port);

export default app;
