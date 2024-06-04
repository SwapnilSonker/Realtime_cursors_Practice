
const socket = io("http://localhost:4000");

socket.on("connect" , (res) => {
    console.log("Connected to the server :",res);
})
socket.on("chat" , (data) => {
    console.log("client" , data);
})

socket.emit("clientChat" , "This is from client side....");


//to update to the latest position use volatile with socket.emit
let count = 0;
setInterval(() => {
    socket.volatile.emit("ping" , ++count)
}, 1000);