import express from 'express';
import volleyball from 'volleyball';
import bodyParser from 'body-parser';
import cors from 'cors';

import route from './routes';

// Set up the express app
const app = express();
app.use(cors({ credentials: true, origin: true }));

// Log requests to the console.
app.use(volleyball);

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


route(app);
// Set the app entry port
const port = process.env.PORT || 8000;
// app.set('port', 8000);

app.listen(port);

export default app;
