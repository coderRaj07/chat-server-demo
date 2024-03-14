const socket = io();

// DOM elements
const chatBox = document.getElementById('chatBox');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

// Event listener for sending messages
sendButton.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        socket.emit('chat-message', message);
        messageInput.value = '';
    }
});

// Display received messages
socket.on('chat-message', ({ username, message }) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
        <div class="message-content">
            <strong>${username}:</strong> ${message}
        </div>`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
});
