const { MessageEmbed } = require('discord.js');

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('lommeregner')
        .setDescription('lommeregner')
        .addNumberOption(option => option
            .setName('num')
            .setDescription('Det størte tal her.')
            .setRequired(true))

        .addStringOption(option =>
            option.setName('input')
                .setDescription('input')
                .setRequired(true)
                .addChoice('+', '+')
                .addChoice('-', '-')
                .addChoice('/', '/'))

        .addNumberOption(option => option
            .setName('num1')
            .setDescription('det mindste tal her.')
            .setRequired(true)),
    async execute(interaction, client) {
        const tegn = interaction.options.getString('input');
        let integer = interaction.options.getNumber('num');
        let integer2 = interaction.options.getNumber('num1');
        console.log("------------------------------------------------")
        console.log(tegn)
        console.log(integer2)
        console.log(integer)
        let s = +integer;
        let s1 = +integer2;
        if (tegn === '+') {
            let svar = +s1 + s;
            const embed2 = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('📝 **SmartPay - Matmatik** 📝')
                .setDescription(`${s} + ${s1} = \`${svar}\``)
                .setTimestamp()
                .setImage('https://imgur.com/LffA9ID.png')
                .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
            await interaction.reply({ embeds: [embed2] });
        }
        if (tegn === '-') {
            let svar = s - s1;
            const embed2 = new MessageEmbed()
                .setColor('#ff0000')
                .setTitle('📝 **SmartPay - Matmatik** 📝')
                .setDescription(`${s} - ${s1} = \`${svar}\``)
                .setTimestamp()
                .setImage('https://imgur.com/LffA9ID.png')
                .setFooter({ text: `Requested by ${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL() })
            await interaction.reply({ embeds: [embed2] });
        }
    }

}               