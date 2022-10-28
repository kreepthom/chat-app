import { Server } from "socket.io";
import messageHandler from "../../utils/sockets/messageHandler";
import { filterDuplicateUsers } from "../../utils/duplicateUser";
import messagePrivateHandler from "../../utils/sockets/messagePrivateHandler";


export default function SocketHandler(req, res) {
  if (res.socket.server.io) {
    res.end();
    return;
  }
  let users = [];
  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const onConnection = (socket) => {
    // messagePrivateHandler(io,socket,socket.id)
    messageHandler(io, socket);
    
    socket.on('connected', (iduser, name) => {
      socket.id = iduser
      users = filterDuplicateUsers( users, socket.id, name)
      console.log(users)
      // socket.emit('listUsers', users)
    })
    socket.on('disconnected', (id) => {
      
      let filteredUsers = users.filter(user => user.id !== id)
      users = filteredUsers
      console.log('users: ',users)
      console.log( 'filtered: ',filteredUsers)

      // console.log(id,'la dispare ------', users)
    })

  };

  io.on("connection", onConnection);
  console.log("Setting up socket");
  res.end();
}

