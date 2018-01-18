const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'server2client@example.com',
    //     text: 'Hey, what is going on?',
    //     createdAt: 123
    // });

    socket.emit('newMessage', {
        from: 'serveruser',
        text: 'Hey, This is from Server to client?',
        createdAt: 123
    });

    // socket.on('createEmail', (newEmail) => {
    //     console.log('CreateEmail', newEmail);
    // });

    socket.on('createMessage', (newMessage) => {
        console.log('CreateMessage', newMessage);
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});
