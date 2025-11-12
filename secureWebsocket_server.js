const webSocket = require("ws");
const fs = require("fs");
const https = require("https");

const server = https.createServer({
    key: fs.readFileSync("localhost-key.pem"),
    cert: fs.readFileSync("localhost.pem")
});

const wss = new webSocket.Server({server});

wss.on('connection', (ws) => {
    console.log("Client connected");

    //ws.send("Welcome! You are connected.");

    // When a client sends a message
    ws.on('message', (message) => {
        console.log("Received:", message.toString());

        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === webSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on('close', () => {
        console.log("Client disconnected");
    });
});

function onServerStart()
{
    console.log("WSS server running on wss://localhost:8080");
}

server.listen(8080, onServerStart);