if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

const express = require('express');
const app = express();
const config = require('./config');
const PORT = config.PORT[process.env.NODE_ENV];
const apiRoutes = require('./routes/api');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api', apiRoutes);

app.use('/*', (req, res) => {
  res.status(404).send({error: '404 - Page not found'});
});

app.listen(PORT, () =>  {
    console.log(`listening on port ${PORT}`);
});


