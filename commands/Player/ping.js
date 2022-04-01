const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Ping! Pong?',
    execute(client, message, args, Discord) {
        const delay = Date.now() = message.createdAt
        const pay = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('**Pong**')
            .setDescription(`*${delay}ms*`)
        return message.channel.send({ embeds: [pay] });
    },
}