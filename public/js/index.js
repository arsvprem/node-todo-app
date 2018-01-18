const socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createEmail', {
    //     to: 'client2server@example.com',
    //     text: 'Hey, this is jon doe'
    // });

    
    socket.emit('createMessage', {
        to: 'client to server message',
        text: 'Hey, this is jon doe'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function(email) {
//     console.log('New Email', email);
// });

socket.on('newMessage', function(chat) {
    console.log('New Message', chat);
});