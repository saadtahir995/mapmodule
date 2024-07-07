const io = require('socket.io')(3000, {
    cors: {
      origin: '*', // Allow all origins for development
      methods: ['GET', 'POST'],
      credentials: true
    }
  });
  
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('locationUpdate', (data) => {
        console.log('Location data received:', data);
        io.emit('locationUpdate', data); // Broadcast location data to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

const PORT = process.env.PORT || 5174;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));