const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 4001;

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

app.get("/", function (req, res) {
  res.send("<h1>Sezzle Calculator Server</h1>");
});

io.on("connection", (socket) => {
  console.log("New client connected");
  socket.on("chat", function (msg) {
    io.emit("chat", msg);
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(port, () => console.log(`Listening on port ${port}`));
