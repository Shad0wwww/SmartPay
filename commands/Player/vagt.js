const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'vagt',
    description: "Vagt regler",
    execute(client, message, args, Discord) {
        const helpEmbed = new MessageEmbed()
            .setColor('#008937')
            .setTitle('**Vagt Regler**')
            .addFields(
                {name: '\u200B', value:"> **1** Abuse er ikke __tilladt__! \n> **2** Hvis du bliver jumpet, må du ikke gå i non-pvp! \n> **3** Du må ikke tage vagt gear, og sælge det i sælge-kiste bagefter\n> **4** Du må ikke give gear til folk"},     
            )
            .setTimestamp()
            .setFooter('Sidst opdateret:')
        message.channel.send({ embeds: [helpEmbed] });
    }
}