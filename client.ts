import io from 'socket.io-client';

const socket = io('ws://localhost:4000')

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