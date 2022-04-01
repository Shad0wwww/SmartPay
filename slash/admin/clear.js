const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('clear')
        .setDescription('Fjern antal beskeder fra discord-kanalen!')
        .addIntegerOption((option) => option
            .setMaxValue(100)
            .setMinValue(1)
            .setName('antal')
            .setDescription(`Antal beskeder du vil slette — Range: 1 til 100.`)
            .setRequired(true),
        ),
    async execute(interaction, client) {
        try {
            if(!interaction.member.permissions.has("ADMINISTRATOR") && !interaction.member.permissions.has(kickPermissions)){
                const embed4 = new MessageEmbed()
                    .setColor('#ff0000')
                    .setTitle('Clear Chat')
                    .setDescription('Du har ikke adgang!')
                    .setTimestamp()
                await interaction.channel.send({ embeds: [embed4] });
            }
        }  catch (error) { console.log('last ' + error) }
        try {
            const real_integer = interaction.options.getInteger('amount');
            let integer = interaction.options.getInteger('amount');
            if(integer !== 100) { integer = integer + 1 }

            await interaction.channel.bulkDelete(integer, true);

            try {
                await interaction.reply({ content: `🤌 Slettede \`${real_integer} beskeder\`!`, fetchReply: true })
                
                setTimeout(() => { interaction.deleteReply(); }, 5000);
            } catch (error) { console.log('1 ' + error) }
        } catch (error) { console.log('last ' + error) }
    },
}