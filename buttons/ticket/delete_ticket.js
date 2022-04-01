const { MessageButton, MessageEmbed, MessageActionRow } = require('discord.js');
const { token, clientId, guildId } = require("../../config.json")

module.exports = {
    data: {
        name: `delete-ticket`
    },
    async execute (interaction, client, member) {
        try {
            const guild = client.guilds.cache.get(interaction.guildId);
            const chan = guild.channels.cache.get(interaction.channelId);
        
            const ticket = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('🎟️ Ticket - SmartPay 🎟️')
                .setDescription('Ticketen bliver fjernet om 5 sekunder')      
                .setTimestamp()  
                .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
            interaction.reply({
           
                embeds: [ticket],
                components: [],
            });
            setTimeout(() => {
                chan.delete();
            }, 5000);

        } catch (error) {
            console.error(error)
        }

    } 
}