import express from 'express';
import volleyball from 'volleyball';
import bodyParser from 'body-parser';

import route from './routes';

// Set up the express app
const app = express();


// Log requests to the console.
app.use(volleyball);

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
route(app);
// Set the app entry port
const port = process.env.PORT || 8000;
// app.set('port', 8000);

app.listen(port);

export default app;
