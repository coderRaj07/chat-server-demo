const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

const path = require("path"); // Import path module

const port = process.env.PORT || 5000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Store user information
const users = {};

// Socket.IO connection handling
io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    // When a new user joins
    socket.on("new-user", (username) => {
        users[socket.id] = username;
        socket.broadcast.emit("user-connected", username);
    });

    // When a user sends a message
    socket.on("chat-message", (message) => {
        const socketId = socket.id;
        const username = socketId.substring(0, 7);
        io.emit("chat-message", { username: username, message: message });
    });


    // When a user disconnects
    socket.on("disconnect", () => {
        console.log("User disconnected", users[socket.id]);
        socket.broadcast.emit("user-disconnected", users[socket.id]);
        delete users[socket.id];
    });
});

http.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

