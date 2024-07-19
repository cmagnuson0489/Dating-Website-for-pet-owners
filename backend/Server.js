//Foundational Javascript code to be used as the foundation for my server

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const socketIO = require('socket.io');
const http = require('http')
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);



app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {useNewURlParser: true, useUnifiedTopology: true});

app.use('/api/users, userRoutes');

io.on('connection', (socket) => {
  socket.on('sendMessage', (message) => {
    io.emit('receiveMessage', message);
    });
  });
  server.listen(process.env.PORT, () => {
    console.log('Server is running on port ${process.env.PORT}');
  });