const socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

socket.on('newMessage', function(chat) {
    console.log('New Message', chat);
    const li = jQuery('<li></li>');
    li.text(`${chat.from}: ${chat.text}`);

    jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'Shaalu',
//     text: 'Poda'
// }, function(data) {
//     console.log('Got it!', data);
// });

// $(function() {
    
//     $('#message-form').submit(function(e) {
//     console.log('Received');
//     e.preventDefault();
// });

// });

jQuery('#message-form').on('submit',function(e){
    e.preventDefault();
    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function() {

    });
  });