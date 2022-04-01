const Discord = require('discord.js');


module.exports = (Discord, client, message) => {
    client.user.setActivity(`hi`, {type: "WATCHING"});
    console.log(`Det er: ${client.user.username}`);

    setInterval(() =>{
        const guild = client.guilds.cache.get('882241855381713016')
        let members = guild.memberCount;
        let channel = client.channels.cache.get('947161634768580678')
        channel.setName(`Members: ${members.toLocaleString()}`)
    }, 600000)
}



