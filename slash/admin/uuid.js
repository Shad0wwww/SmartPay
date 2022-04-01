const { MessageEmbed, Permissions } = require('discord.js');
const mcapi = require('mcapi');
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uuid')
        .setDescription('Få spillerns uuid!')
        
        .addStringOption(option =>
            option.setName('input')
                .setDescription('Minecraft navn!')
                .setRequired(true)),


    permissions: [ Permissions.uuid ],
    async execute(interaction, client) {
        const arg1 = interaction.options.getString('input');
        console.log(arg1)
        let uuid = await mcapi.usernameToUUID(`${arg1}`)
        try{
            console.log(uuid)
            const embed21 = new MessageEmbed()
                .setColor('#0099ff')
                .addFields(
                    {name: '**Minecraft navn:**', value: `\`${arg1}\``},
                    {name: '**UUID:**', value: `\`${uuid}\``}
                )
                .setThumbnail(`https://minotar.net/helm/${arg1}/100.png`)
                .setTimestamp()
                .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
            await interaction.reply({ embeds: [embed21], ephemeral: true });
            
        } catch(e) {
           
            const embed2 = new MessageEmbed()
                .setDescription('Personen findes ikke')
            await interaction.reply({ embeds: [embed2], ephemeral: true });
        }    
    }
}