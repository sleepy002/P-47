const commons = require('../usefulmodules/common.js')

module.exports = {
   name: 'hey',
   description: 'Sends a greetings.',
   usage: '[someone you want to greet] ',
   example: 'Dinly.',
   execute(message, args) {
      
      let firstNumber = 20;
      let lol = 5;
      let XDDD = 500;
      
      message.channel.send(firstNumber - lol);
      message.channel.send(lol + XDDD);
      message.channel.send(firstNumber * lol);
      message.channel.send(XDDD / lol);
      
      
      
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