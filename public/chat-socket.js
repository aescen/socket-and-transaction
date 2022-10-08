import { io } from "https://cdn.socket.io/4.5.1/socket.io.esm.min.js";
 
const socket = io('http://localhost:3000', { autoConnect: false });
let connected = false;

const listMessages = document.getElementById('list-messages');
const btnSubmit = document.getElementById('btn-submit');
const btnConnect = document.getElementById('btn-connect');

const handleSubmitNewMessage = () => {
  if(!connected) {
    alert('Connect first!');
    return;
  }
  
  const message = document.getElementById('message');

  socket.emit('message', { data: message.value });
};


btnSubmit.addEventListener('click', handleSubmitNewMessage);
btnConnect.addEventListener('click', () => {
  socket.connect();
  connected = true;
  alert('Connected.');
});

socket.on("connect", async () => {
  socket.emit("join", "socket-chat");
});

socket.on('message', ({ data = '' }) => {
  const li = document.createElement('li');

  li.appendChild(document.createTextNode(data));
console.log()
  listMessages.appendChild(li);
});
