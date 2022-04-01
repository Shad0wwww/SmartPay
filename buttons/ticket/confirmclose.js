const { MessageButton, MessageEmbed, MessageActionRow } = require('discord.js');
const { token, clientId, guildId } = require("../../config.json")

module.exports = {
    data: {
        name: `confirm_ticket`
    },
    async execute (interaction, client, member) {
        try {
            const guild = client.guilds.cache.get(interaction.guildId);
            const chan = guild.channels.cache.get(interaction.channelId);
            const ticketclose = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('🎟️ Ticket - SmartPay 🎟️')
                .setDescription(`Ticket lukket af <@!${interaction.user.id}>`)      
                .setTimestamp()  
                .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })

            interaction.reply({
                embeds: [ticketclose],
                ephemeral: true,
                components: [],
            });    
            chan.edit({
                name: `closed-${chan.name}`,
                permissionOverwrites: [
                    {
                        id: client.users.cache.get(chan.topic),
                        deny: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                    },
                    {
                        id: "945985613683888139",
                        allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
                    },
                    {
                        id: "946124965101592626",
                        deny: ['VIEW_CHANNEL'],
                    },
                ],
            })
            .then(async () => {
                const embed = new MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('🎟️ Ticket - SmartPay 🎟️')
                    .setDescription('Adminmenu')
                    .setTimestamp()  
                    .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })

                const row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                            .setCustomId('delete-ticket')
                            .setLabel('Delete')
                            .setEmoji('🗑️')
                            .setStyle('DANGER'),
                        new MessageButton()
                            .setCustomId('gem_ticket')
                            .setLabel('GEM-TICKET')
                            .setEmoji('📰')
                            .setStyle('SECONDARY'),
                    );
                chan.send({
                    embeds: [embed],
                    components: [row]
                });
                
            })
        } catch (error) {
            console.error(error)
        }

    } 
}