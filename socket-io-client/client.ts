import socket from './socket';

socket.auth = { userName: process.env.USER_ID };

socket.connect();

// socket.on('')
socket.emit('message', {
    to: 'Vivek',
    message: 'Hey Man',
    from: 'Abhishek'
})
socket.on('Abhishek', (msg) => {
    console.log(msg);
})

socket.on('Vivek', (msg) => {
    console.log(msg);
})