const webSocket = require("ws");
const wss = new webSocket.Server({port:8080});

/*const messages = [
    "Hello there!",
    "How are you?",
    "This is a random message.",
    "WebSocket is cool!",
    "Here comes another message.",
    "Hope you're enjoying this demo!",
];*/

wss.on('connection', (ws) => {
    console.log("Client connected");

    //ws.send("Welcome! You are connected.");

    /*function sendMessage() {
        if (ws.readyState === WebSocket.OPEN) {
            const randomIndex = Math.floor(Math.random() * messages.length);
            const randomMsg = messages[randomIndex];

            ws.send(randomMsg);
        }

        // Schedule next message at random interval (1s–5s)
        const delay = 5000;
        setTimeout(sendMessage, delay);
    }*/

    // Start sending random messages
   // sendMessage();

    // When a client sends a message
    ws.on('message', (message) => {
        console.log("Received:", message.toString());

        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        });
    });

    ws.on('close', () => {
        console.log("Client disconnected");
    });
});