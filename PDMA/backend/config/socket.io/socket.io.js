module.exports = (server) => {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('text-to-speech', (text) => {
      require('./text-to-speech')(text, (fileName) => {
        io.emit('text-to-speech', fileName);
      });
    });
    
  });
}
