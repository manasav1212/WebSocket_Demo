//WebSocket Demo
const socket = new WebSocket('ws://localhost:8080');
const chtbox = document.getElementById("rcvdmsg");

socket.onopen = function(event)
{
    console.log("Connected to websocket server");
}

socket.onmessage = function(event)
{
    //console.log("Received Message:", event.data);
    const p = document.createElement("p");
    p.textContent = event.data;
    p.style.textAlign = "left";
    chtbox.appendChild(p);
}

socket.onclose = function(event)
{
    console.log("Connection closed to websocket server");
}

socket.onerror = function(event)
{
    console.error("websocket error:", event.data);
}

function sendMessage()
{
    const message = msg.value;
    if (message && socket.readyState === WebSocket.OPEN) {
        socket.send(message);
        const p = document.createElement("p");
        p.textContent = message;
        p.style.textAlign = "right";
        chtbox.appendChild(p);
    }
    msg.value = "";
}
