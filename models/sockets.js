class Sockets {
    io;

    constructor(io) {
        this.io = io
    }

    socketEvents() {
        this.io.on('connection', (socket) => {

            socket.on("mensaje-to-server", (data) => {
                this.io.emit("mensaje-from-server", data)
            })

        });
    }
}

module.exports = Sockets;