const { MessageButton, MessageEmbed, MessageActionRow } = require('discord.js');
const { token, clientId, guildId } = require("../../config.json")

module.exports = {
    data: {
        name: `opret_ticket`
    },
    async execute (interaction, client, member) {
        try {

            const duharenticket = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('🎟️ Ticket - SmartPay 🎟️')
                .setDescription('Du har allerede en åben ticket!')
                .setTimestamp()
            
            const row = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                        .setCustomId('close_ticket')
                        .setLabel('Close')
                        .setEmoji("🔒")
                        .setStyle('DANGER'),
                )
                
            const ticket = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('🎟️ Ticket - SmartPay 🎟️')
                .setDescription('Skriv dit problem nedenfor. \n For at lukke din ticket, tryk på close.')

            //const channel = await interaction.guild.channels.create(`ticket: ${interaction.user.tag}`);
            
            if (client.guilds.cache.get(interaction.guildId).channels.cache.find(c => c.topic == interaction.user.id)) {
                return interaction.reply({
                    time: 1000,
                    embeds: [duharenticket],
                    ephemeral: true
                });
            };   

        
            
            interaction.guild.channels.create(`ticket-${interaction.user.tag}`, {
                parent: "959493136193839124",
                topic: interaction.user.id,
                permissionOverwrites: [{
                    id: interaction.user.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
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
                type: "GUILD_TEXT",

            }).then(async c => {
    
                const openaticket = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('🎟️ Ticket - SmartPay 🎟️')
                .setDescription(`Ticket blev lavet i <#${c.id }>`)
                .setTimestamp()
                .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })

                interaction.reply({
                    time: 1000,
                    embeds: [openaticket],
        
                });
                msg = await c.send({ embeds: [ticket], components: [row] });
                setTimeout(() => {
                    interaction.deleteReply();
                }, 5000);
                
            });

            
        
    
            

            
                
            
           
            
        } catch (error) {
            console.error(error)
        }
    }
}