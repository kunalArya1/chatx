import app from "./app.js";
import http from "http";
import { initializeWebSocket } from "./websocket/webSocketServer.js";

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);

initializeWebSocket(server);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
