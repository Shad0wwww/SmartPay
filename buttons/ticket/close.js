const { MessageButton, MessageEmbed, MessageActionRow } = require('discord.js');
const { token, clientId, guildId } = require("../../config.json")

module.exports = {
    data: {
        name: `close_ticket`
    },
    async execute (interaction, client, member) {
        try {
            

            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('confirm_ticket')
                        .setLabel('Close')
                        .setEmoji("🔒")
                        .setStyle('DANGER'),
                    new MessageButton()
                        .setCustomId('no')
                        .setLabel('Cancel')
                        .setStyle('SECONDARY'),
                
                );
            const ticket = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('🎟️ Ticket - SmartPay 🎟️')
                .setDescription('Er du sikker på at du vil lukke din ticket?')      
                .setTimestamp()  
            interaction.reply({
                time: 1000,
                embeds: [ticket],
                components: [row],
                ephemeral: true,
            });

        } catch (error) {
            console.error(error)
        }

    } 
}