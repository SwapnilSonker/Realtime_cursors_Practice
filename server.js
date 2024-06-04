import { createServer } from "http";
import { Server } from "socket.io";
import express from "express";

const app = express()
const httpServer = createServer(app);
const socket = new Server(httpServer , {
    cors:"http://127.0.0.1:5500"
});

socket.on("connection" , (socket) => {
    console.log("A user connected", socket);

    socket.on("message" , (data) => {
        console.log("received message :" , data);
    })

    socket.on("disconnect" , () => {
        console.log("User is disconnected!!!");
    })

    socket.emit("chat" , "Hi this is from server side...")

    socket.on("clientChat" , (data) => {
        console.log("server side client data :" , data);

    })

    socket.on("ping" , (count) => {
        console.log("count" , count);
    })
})

httpServer.listen(4000 , () => {
    console.log("Server is connected 🤝");
});