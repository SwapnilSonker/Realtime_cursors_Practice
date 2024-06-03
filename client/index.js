// import  io  from "socket.io-client";
// import io from "socket.io-client";

const socket = io("http://localhost:4000");

socket.on("connect" , (res) => {
    console.log("Connected to the server :",res);
})
