const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'staff',
    description: "En list over alle commands du kan bruge",
    execute(client, message, args, Discord) {
        const helpEmbed = new MessageEmbed()
            .setColor('#008937')
            .setTitle('**Staff Teamet**')
            .addFields(
                {name: '**Ejer (2)**', value:"<:shad0wsense:929524896101449758> **Ejer** Shad0wsense \n<:pro_water:929529563380322385> **Ejer** Pro_water"},
                {name: '**H-Admin (1)**', value:"<:mathiilde:929530124850847794> **H-Admin** Mathiilde"},
                {name: '**Admin (4)**', value:"<:iskoldcool:929531143345295400> **Admin** Iskoldcool\n<:hippejose:929531125481766934> **Admin** hippejose\n<:annemand:929531785224798208> **Admin** Annemand_\n<:Juinji:929532567617691719> **Admin** Juinji"},
                {name: '**Mod (0)**', value:"Ingen" },
                {name: '**Hjælper (1)**', value:"<:rosepose15:929535204526272552> **Hjælper** Rosepose15" }
            )
            .setTimestamp()
            .setFooter('Sidst opdateret:')
        message.channel.send({ embeds: [helpEmbed] });
    }
}


