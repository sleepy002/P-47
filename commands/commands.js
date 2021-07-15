const { prefix } = require('../config.json')


module.exports = {
   name: 'commands',
   description: 'Lists all commands or shows info about a specific command.',
   aliases: ['command'],
   usage: '[command name]',
   example: 'name',
   execute(message, args)
   {
      const data = []
      const { commands } = message.client

      if (!args[1])
      {
         data.push('Here\'s a list of all normal commands:')
         data.push(commands.map(command => command.name).join(', '))
         data.push(`\nYou can send \`${prefix}commands [command name]\` to get info on a specific command.`)

         return message.author.send(data, { split: true })
            .then(() => {
               if (message.channel.type === 'dm')
                  return

               message.reply('I\'ve sent you a DM with all my normal commands.')
            })
            .catch(error => {
               console.error(`Could not send help DM to ${message.author.tag}.\n`, error)
               message.reply('it seems like I can\'t DM you! Do you have DMs disabled?')
         })
      }
      else
      {
         const name = args[1].toLowerCase()
         const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name))

         if (!command)
            return message.reply('that\'s not a valid command!')

         data.push(`**Name:** ${command.name}`)

         if (command.aliases) data.push(`**Aliases:** ${command.aliases.join(', ')}`)
         if (command.cooldown) data.push(`**Cooldown:** ${command.cooldown}`)
         if (command.description) data.push(`**Description:** ${command.description}`)
         if (command.usage) data.push(`**Usage:** ${prefix}${command.name} ${command.usage}`)
         if (command.example) data.push(`**Example 1:** ${prefix}${command.name} ${command.example}`)
         if (command.otherexample) data.push(`**Example 2:** ${prefix}${command.name} ${command.otherexample}`)

         message.channel.send(data, { split: true })
      }
   },
}