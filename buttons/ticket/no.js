const { MessageButton, MessageEmbed, MessageActionRow } = require('discord.js');
const { token, clientId, guildId } = require("../../config.json")

module.exports = {
    data: {
        name: `no`
    },
    async execute (interaction, client, member) {
        try {
            const guild = client.guilds.cache.get(interaction.guildId);
            const chan = guild.channels.cache.get(interaction.channelId);
            const ticket = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('🎟️ Ticket - SmartPay 🎟️')
                .setDescription('Din ticket er nu åben igen.')      
                .setTimestamp()  
            interaction.reply({
                embeds: [ticket],
                components: [],
            });
            setTimeout(() => {
                interaction.deleteReply();
            }, 5000);

        } catch (error) {
            console.error(error)
        }

    } 
}