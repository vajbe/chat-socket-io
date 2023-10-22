import http from 'http';
import { Server } from 'socket.io';
import { handleMiddleWare } from './socket-middleware';
const express = require('express');
const app = express();
// const { Server } = require('socket.io'); // Add this

// app.use(cors()); // Add cors middleware

const server = http.createServer(app); // Add this

// Add this
// Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
});

// Add this
// Listen for when the client connects via socket.io-client

handleMiddleWare(io);
io.on('connection', (socket: any) => {

    console.log(`User connected`, socket.auth);
    socket.on('message', (msg: any) => {
        console.log(msg);
        msg.resonse = 'Sending back to ' + msg.from;
        socket.emit(msg.from, msg)
    });

    socket.on('disconnect', (res: any) => {
        console.log(res);
        console.log(`User disconnected ${socket.id}`);
        console.log('Disconnecting')
    })
    // We can write our socket event listeners in here...
});

server.listen(4000, () => 'Server is running on port 4000');
