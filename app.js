import express from 'express';
import volleyball from 'volleyball';
import bodyParser from 'body-parser';
// Set up the express app
const app = express();
require('dotenv').config();

// Log requests to the console.
app.use(volleyball);

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set the app entry port
app.set('port', 8000);

app.listen(app.get('port'));

// Setup a default catch-all route that sends back a welcome message.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to my API.'
}));
export default app;
