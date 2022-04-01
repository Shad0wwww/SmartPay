const { MessageEmbed, Message } = require('discord.js');


module.exports = {
    name: "clear",
    category: "moderation",
    description: "Fjerne beskeder",
    async execute (client, message, args) {
        if (message.deletable) {
            message.delete();
        }
    
        // Hvis personen ikke har adgang
        if(!message.member.permissions.has("ADMINISTRATOR") && !message.member.permissions.has(kickPermissions)){
            const embed4 = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Clear Chat')
                .setDescription('Du har ikke adgang!')
                .setTimestamp()
            return message.channel.send({ embeds: [embed4] });
        }

        // Check if args[0] is a number
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            const embed1 = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('Clear Chat')
                .setDescription('Skriv et tal')
                .setTimestamp()
            return message.channel.send({ embeds: [embed1] });
        }
        
    

        let deleteAmount;

        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        } else {
            deleteAmount = parseInt(args[0]);
        }

        message.channel.bulkDelete(deleteAmount, true)
            .then(deleted => message.channel.send(`Jeg fjernede \`${deleted.size}\` beskeder.`))
            .catch(err => message.reply(`Something went wrong... ${err}`));
    }
}




