const { MessageButton, MessageEmbed, MessageActionRow } = require('discord.js');
const { getPasteUrl, PrivateBinClient } = require('@agc93/privatebin');
const { token, clientId, guildId } = require("../../config.json")

module.exports = {
    data: {
        name: `gem_ticket`
    },
    async execute (interaction, client, member) {
        try {
            const guild = client.guilds.cache.get(interaction.guildId);
            const chan = guild.channels.cache.get(interaction.channelId);

            interaction.reply({
                content: 'Gemmer ticket...'
            });
            chan.messages.fetch().then(async (messages) => {
                let a = messages.filter(m => m.author.bot !== true).map(m =>
                  `${new Date(m.createdTimestamp).toLocaleString('dk-DK')} - ${m.author.username}#${m.author.discriminator}: ${m.attachments.size > 0 ? m.attachments.first().proxyURL : m.content}`
                ).reverse().join('\n');
                if (a.length < 1) a = "Nothing"
                var paste = new PrivateBinClient("https://privatebin.net/");
                var result = await paste.uploadContent(a, {uploadFormat: 'markdown'})

                    const embed = new MessageEmbed()
                        .setTitle('🎟️ Ticket - SmartPay 🎟️')
                        .setDescription(`📰 Logs fra ticket \`${chan.id}\` | Lavet af <@!${chan.topic}> | lukket af <@!${interaction.user.id}>\n\nLogs: [**Klik her for at se logs**](${getPasteUrl(result)})`)
                        .setColor('2f3136')
                        .setFooter({text: "Denne log vil blive fjernet om 24timer"})
                        .setTimestamp();
                    //const embed2 = new MessageEmbed()
                        //.setTitle('🎟️ Ticket - SmartPay 🎟️')
                        //.setDescription(`📰 Logs fra ticket \`${chan.id}\`: [**Klik her for at se logs**](${getPasteUrl(result)})`)
                        //.setColor('2f3136')
                        //.setFooter({text: "Denne log vil blive fjernet om 24timer"})
                        //.setTimestamp();
                    client.channels.cache.get("959585331257163796").send({
                        embeds: [embed],
                    });
            });

        } catch (error) {
            console.error(error)
        }

    } 
}