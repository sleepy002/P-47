const commons = require('../usefulmodules/common.js')

module.exports = {
   name: 'hey',
   description: 'Sends a greetings.',
   usage: '[someone you want to greet] ',
   example: 'Dinly.',
   execute(message, args) {
      
      let we = 4000;
      let fox = 7;
      let DX = 30;
      
      message.channel.send(we - fox);
      message.channel.send(fox + DX);
      message.channel.send(we * fox);
      message.channel.send(DX / fox);
      
      
      
      // message.channel.send(`This is the message: ${message}`);
      // message.channel.send(`This is the args: ${args}`);
      // message.channel.send(`This is the args[0]: ${args[0]}`);
      // message.channel.send(`This is the args[1]: ${args[1]}`);
      // message.channel.send(`This is the args[2]: ${args[2]}`);
      // message.channel.send(`This is the args[3]: ${args[3]}`);
      
      // if (!args[1])
          // message.channel.send(`The plane says nothing because it's a plane`);
      // else
         // message.channel.send(`Hey ${args[1]}!`);
   },
}