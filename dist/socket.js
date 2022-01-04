"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 5000 });
const startwss = () => {
    wss.on("connection", function connection(ws) {
        ws.on("message", function message(data) {
            wss.clients.forEach(function (client) {
                client.send(data);
            });
        });
    });
};
exports.default = startwss;
