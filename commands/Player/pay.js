const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'pay',
    description: "Hvordan man bruger shad0wpay botten",
    execute(client, message, args, Discord) {
        
        const pay = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Shad0wpay')
            .setAuthor('Shad0wpay')
            .setDescription('1. Punkt\n Start med at tilslutte larmelobby ved /server larmelobby (og ikke andre lobbyer)')
            .addFields(
                { name: '1. Punkt\n Start med at tilslutte larmelobby ved /server larmelobby (og ikke andre lobbyer)' },
                { name: '\u200B', value: '\u200B' },
                { name: '2. Punkt Tjek om **Shad0wpay** er online, hvis ikke så skriv til en **ejer** på discorden, og lad vær med at sende emeralder til **Shad0wpay**!'},

            )
            .setTimestamp()
        message.channel.send({ embeds: [pay] });
    }
}