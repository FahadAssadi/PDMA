module.exports = (server) => {
  const io = require('socket.io')(server);

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('translate', (data) => {
      require('./translate')(data.text, data.target, (translations) => {
        io.emit('translate', translations);
      });
    });

    socket.on('text-to-speech', (data) => {
      require('./text-to-speech')(data.text, (fileName) => {
        io.emit('text-to-speech', fileName);
      });
    });

    socket.on('generative-ai', (data) => {
      console.log("called generative-ai");

      require('./generative-ai')(data.text, (result) => {
        io.emit('generative-ai', result);
      });
    });
    
  });
}
