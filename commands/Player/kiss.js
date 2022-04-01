const { MessageEmbed } = require('discord.js');
const { Random } = require("something-random-on-discord")

module.exports = {
  name: "kiss",
  category: "fun",
  description: "Kiss someone",
};

module.exports.execute = async (bot, message, args) => {
    const target = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    
    let data = await Random.getAnimeImgURL("kiss");

    const reason = args.slice(0).join(" ");

    if(!target){
    return message.reply("Hvem vil du gerne kysse? 💗")
    }
    
    const embed = new MessageEmbed()
        .setImage(data)
        .setColor("#0099ff")
        .setFooter({ text: `${message.author.username} kysser ${target.user.username} \♥` })
        
        .setTimestamp()
    message.channel.send({ embeds: [embed] });
}
    