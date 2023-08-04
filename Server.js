//Foundational Javascript code to be used as the foundation for my server

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = reuire('body-parser');
const user = require('./routes/user);

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

mongoose
  .connect(
    'your-mongodb-connection-string',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB successfully connected'))
  .catch(err => console.log(err));

app.use('/api/users', user);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));