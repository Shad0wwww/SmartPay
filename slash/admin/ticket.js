const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ticket')
        .setDescription('ticket'),
    async execute(interaction, client) {
        try {
            const button = new MessageButton()
                .setCustomId('opret')
                .setLabel('Opret')
                .setStyle('Opret')
                
    
    
            const ticket = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('🎟️ Ticket - SmartPay 🎟️')
                .setDescription('Her har du mulighed for at oprette en ticket. Ticket bruges til bugs og hjælp til opsætning.')
                .setFooter({ text: `For at oprette en ticket skal du trykke på opret.` });
            await interaction.reply({ embeds: [ticket], components: [button]});
            
    
    
    
    
        } catch(e) {
            console.log(e)
            const embed2 = new MessageEmbed()
                .setDescription('Der opstod en fejl')
            message.channel.send({ embeds: [embed2] })
        }
        if(button.id === "opret"){
            button.clicker.send('ok')
        }
    }

}

