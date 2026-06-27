import { WebSocketServer, WebSocket } from "ws";

import { Server } from "http";

export function initializeWebSocket(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (socket, req) => {
    socket.on("message", (message) => {});
    socket.on("close", () => {});
  });
}
