import { Server } from 'socket.io';

export const handleMiddleWare = (io: Server) => {
    io.use((socket, next) => {
        const username = socket.handshake.auth.username;
        if (!username) {
            return next(new Error("invalid username"));
        }
        socket.username = username;
        next();
    });
}