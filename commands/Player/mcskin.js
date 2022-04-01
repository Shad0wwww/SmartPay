const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "mcskin",
  aliases: ["mc","skin"],
  usage: "mcskin",
  category: "fun",
  description: "Minecraft skin",
};

module.exports.execute = async (bot, message, args) => {
    const username = args[0];
    if(!args[0]) return message.reply(`Please enter a minecraft user!`)
    const embed = new MessageEmbed()
        .setTitle('Minecraft Skin')
        .setImage(`https://minotar.net/body/${username}/100.png`)
        .setColor('2F3136')
        .setTimestamp()
    message.channel.send({ embeds: [embed] }).then(async embedMessage => {
        await embedMessage.react('🆗');
    })
}
