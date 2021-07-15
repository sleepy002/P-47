
module.exports = {
   name: 'ready',
   once: true,
   execute(client) {
      console.log('Fly away!')
      client.guilds.cache.forEach(guild => console.log('Name: ' + guild.name + ', ID: ' + guild.id))
      client.user.setStatus('available')
      client.user.setPresence({ activity: { name: 'Flying' }, status: 'online' })
   },
};


