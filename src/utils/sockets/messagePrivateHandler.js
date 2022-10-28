export default (io, socket,id) => {
    const createdMessage = (msg) => {
      socket.broadcast.to(id).emit("newIncomingMessage", msg);
    //   io.to(id).emit("newIncomingMessage", msg);
    };
  
    socket.on("mensajes", createdMessage);
  };