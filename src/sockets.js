const socketIO = require('socket.io');
const socket = {};

function connect(server){
    socket.io = socketIO(server);
    console.log('[SOCKETS] connected')
}

module.exports = {socket,connect};