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

route(app);
// Set the app entry port
const port = process.env.PORT || 8000;
// app.set('port', 8000);

app.listen(port);

// Setup a default catch-all route that sends back a welcome message.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to my API.'
}));
export default app;
