import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 5000 });

const startwss = () => {
  wss.on("connection", function connection(ws: WebSocket) {
    ws.on("message", function message(data: any) {
      wss.clients.forEach(function (client) {
        client.send(data);
      });
    });
  });
};

export default startwss;
