const commons = require('../usefulmodules/common.js')

module.exports = {
   name: 'Do a barrel roll',
   description: 'barrel roll.',
   usage: '[Plane does a barrel roll] ',
   example: 'Dinly.',
   execute(message, args) {
      
     
      
      
      
      // message.channel.send(`This is the message: ${message}`);
      // message.channel.send(`This is the args: ${args}`);
      // message.channel.send(`This is the args[0]: ${args[0]}`);
      // message.channel.send(`This is the args[1]: ${args[1]}`);
      // message.channel.send(`This is the args[2]: ${args[2]}`);
      // message.channel.send(`This is the args[3]: ${args[3]}`);
      
      // if (!args[1])
           message.channel.send(`The fighter pitches nose up and preforms a barrel roll.`);
      // else
         // message.channel.send(Do a barrel roll ${args[1]}!`);
   },
}