const commons = require('../usefulmodules/common.js')

module.exports = {
   name: 'hey',
   description: 'Sends a greetings.',
   usage: '[someone you want to greet] ',
   example: 'Dinly.',
   execute(message, args) {
      if (!args[1])
         message.channel.send(`The plane says nothing because it's a plane`);
      else
         message.channel.send(`Hey ${args[1]}!`);
   },
}