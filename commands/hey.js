const commons = require('../usefulmodules/common.js')

module.exports = {
   name: 'hey',
   description: 'Sends a greetings.',
   usage: '[someone you want to greet] ',
   example: 'Dinly.',
   execute(message, args) {
      if (!args[1])
         commons.respondToMessage(message, `Greetings!`);
      else
         commons.respondToMessage(message, `Hey ${args[1]}!`);
   },
}