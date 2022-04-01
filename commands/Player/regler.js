const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'regler',
    description: "En list over alle commands du kan bruge",
    execute(client, message, args, Discord) {
        const reglerEmbed = new MessageEmbed()
            .setColor('#008937')
            .setTitle('**Regler**')
            
            .addFields(
                {name: '**Vores Server regler**', value:'> **1** Spam er ikke __tilladt__! \n> **2** Plageri om at få **gratis rank** __tilladt__!\n> **3** Spam er ikke __tilladt__!\n> **4** Grimt sprog er ikke __tilladt__!\n> **5** Sende links til ting, er ikke __tilladt__! Med mindre det er denne her discord\n> **6**  Reklamere for servere, eller lignende er ikke __tilladt__!\n> **7** Brug af soundpad eller lignende er ikke __tilladt__!\n> **8** Sælge dine ingame ting for penge i virkeligheden er ikke __tilladt__!\n> **9** Alt form for udnytning af bugs er ikke __tilladt__! '},
                {name: '**Vores Discord regler**', value:'> **1** Voicechanger, eller lignende er ikke __tilladt__!\n> **2** Brug af soundpad eller lignende er ikke __tilladt__!\n> **3** Spam er ikke __tilladt__!\n> **4** Grimt sprog er ikke __tilladt__!\n> **5** Reklamere for servere, eller lignende er ikke __tilladt__!'},
                {name: 'Vores Buy regler', value: '> **1** Alle køb kan fratages __øjeblikkeligt__!\n> **2** Køb kun ved staff med __EM rank__!\n> **3** Der er ingen __refund__!\n> **4** Hvis du **payer botten** når den **ikke er online** så kan du ikke få **emeraldene tilbage** medmindre du har **grundige beviser**'}
                )
            .setTimestamp()
            .setFooter('Sidst opdateret:')
            
        message.channel.send({ embeds: [reglerEmbed] }).then(async embedMessage => {;
            await embedMessage.react('👍');

        });
    }
}