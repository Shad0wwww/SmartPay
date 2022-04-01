const { MessageEmbed } = require('discord.js');
const mcapi = require('mcapi');

module.exports = {
    name: 'mcuser',
    description: 'minecraft user',
    usage: '-mcuser <username>',
    category: 'fun',
    aliases: ['mcuser', 'mcaccount', "namehistory"],
}
module.exports.execute = async (bot, message, args) => {

    const embed1 = new MessageEmbed()
        .setTitle('Error!')
        .setDescription(`**Gør sådan her** \n \`\`\`-mcuser <Mcnavn> \`\`\``)
        .setColor('ORANGE')

    if(!args[0]) return message.channel.send({ embeds: [embed1] })

    try{
        const uuid = await mcapi.usernameToUUID(`${args.join(" ")}`)
        const embed = new MessageEmbed()
            .setTitle(`User: ${args.join(" ")}`)
            .addField("Name:", `${args.join(" ")}`)
            .addField("UUID:", uuid)
            .addField("Download:", `[Download](https://minotar.net/download/${args.join(" ")})`)
            .addField("Name MC:", `[Click Here](https://mine.ly/${args.join(" ")}.1)`)
            .setImage(`https://minecraftskinstealer.com/api/v1/skin/render/fullbody/${args.join(" ")}/700`)
            .setColor('RANDOM')
            .setTimestamp()
            .setThumbnail(`https://minotar.net/cube/${args.join(" ")}/100.png)`)
            .setFooter({ text: `${message.author.username}` });
        message.channel.send({ embeds: [embed] })
    } catch(e) {
        const embed2 = new MessageEmbed()
            .setDescription('Personen findes ikke')
        message.channel.send({ embeds: [embed2] })
    }
}


