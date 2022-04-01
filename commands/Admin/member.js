module.exports = client => {
   const channelId  = '933764679707291658'
 
   const updateMembers = guild => {
     const channel = guild.channels.cache.get(channelId)
     channel.setName(`members: ${guild.memberCount.toLocaleString()}`)
   }
 
   client.on('guildMemberAdd', (member) => updateMembers(member.guild))
   client.on('guildMemberRemove', (member) => updateMembers(member.guild))
 
   const guild = client.guilds.cahce.get('933764679707291658')
   updateMembers(guild)
 }