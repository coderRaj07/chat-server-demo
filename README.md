# Chat Server Demo 💬🚀

Welcome to Chat Server Demo, a simple yet powerful chat application that enables real-time communication over the network. Built with Node.js and Socket.IO, this application allows users to connect to a shared chatroom environment, send messages, and receive messages from other connected users instantly.

## Features

### Server Features:
- **Initialization**: 🚀 The server starts listening on a specified port for incoming connections.
- **Connection Handling**: 🤝 It handles multiple client connections concurrently using Socket.IO's event-driven model.
- **Broadcast Messages**: 📡 Messages received from one client are broadcasted to all connected clients, excluding the sender.

### Client Features:
- **Seamless Connection**: 🔌 Clients connect to the server using its IP address and port.
- **Intuitive User Interface**: 🖥️ A simple text-based interface where users can type messages and see messages from others in real-time.
- **Effortless Messaging**: ✉️ Users can send messages to the server, which will then be broadcasted to other clients.
- **Instantaneous Reception**: ⚡ Messages from other users are displayed in real-time.

## Technical Details

- **Language**: 🛠️ Developed using Node.js.
- **Concurrency Handling**: 🔄 Concurrency is managed through Socket.IO's event-driven architecture. Each client connection is handled asynchronously, allowing multiple clients to interact with the server simultaneously without blocking each other.

## Usage

1. **Clone the Repository**: 
    ```bash
    git clone https://github.com/coderRaj07/chat-server-demo.git
    ```
2. **Install Dependencies**: 
    ```bash
    npm install
    ```
3. **Start the Server**: 
    ```bash
    node index.js
    ```
4. **Test the App in Production**: 
    Visit [Chat Server Demo](https://chat-server-demo-production.up.railway.app/) in your web browser to connect to the chatroom.

## License

This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.
