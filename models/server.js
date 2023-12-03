const Sockets = require("./sockets");
const cors = require("cors");

class Server {

    app;
    port;
    server;
    io;

    constructor(app, port, server, io) {
        this.app = app;
        this.port = port;
        this.server = server;
        this.io = io;
    }

    middlewares(express, path) {
        this.app.use(express.static(path.resolve(__dirname, "../public")))
        this.app.use(cors())
    }

    configurarSockets() {
        const sockets = new Sockets(this.io);
        sockets.socketEvents();
    }

    execute(express, path) {

        this.middlewares(express, path);

        this.configurarSockets();

        this.server.listen(this.port, () => {
            console.log("Server corriendo en puerto", this.port)
        })
    }
}

module.exports = Server;