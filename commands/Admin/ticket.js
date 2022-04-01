const { MessageButton, MessageEmbed, MessageActionRow } = require('discord.js');



module.exports = {
    name: "ticket",
    category: "support",
    description: "En support tool",
};

module.exports.execute = async (bot, message) => {
    if(!message.member.permissions.has("ADMINISTRATOR") && !message.member.permissions.has(tickettool)){
        const embed4 = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('🎟️ Ticket - SmartPay 🎟️')
            .setDescription('🔴 Du har ikke adgang!')
            .setTimestamp()
        return message.channel.send({ embeds: [embed4] });

    }
    try {
        const row = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('opret_ticket')
                    .setLabel('Opret')
                    .setEmoji("📩")
                    .setStyle('SUCCESS'),
            )
            


        const ticket = new MessageEmbed()
            .setColor('#ff0000')
            .setTitle('🎟️ Ticket - SmartPay 🎟️')
            .setDescription('Her har du mulighed for at oprette en ticket. \n Ticket bruges til bugs og hjælp til opsætning.')
            .setFooter(`For at oprette en ticket skal du trykke på opret.`);
        await message.channel.send({ embeds: [ticket], components: [row] });
        
        




    } catch(e) {
        console.log(e)
        const embed2 = new MessageEmbed()
            .setDescription('Der opstod en fejl')
        message.channel.send({ embeds: [embed2] })
    }
    
}