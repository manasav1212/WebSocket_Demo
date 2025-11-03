//WebSocket Demo
const socket = new WebSocket('ws://localhost:8080');

socket.onopen = function(event)
{

}

socket.onmessage = function(event)
{

}

socket.onclose = function(event)
{

}

function sendMessage(message)
{
    socket.send(message);
}
