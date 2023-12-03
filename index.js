
const express = require("express");
const path = require("path");
const Server = require("./models/server");
require("dotenv").config();

// servidor  de express
const app = express();

// port
const port = process.env.PORT;

// servidor de sockets
const serverIO = require('http').createServer(app);

// configuración del socket server
const io = require('socket.io')(serverIO);


const server = new Server(app, port, serverIO, io);

// desplegar el directorio público y correr en el port
server.execute(express, path);