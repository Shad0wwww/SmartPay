const { Discord, Client, Collection, MessageEmbed  } = require('discord.js')
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] })
const { token } = require("./config.json")
const fs = require('fs');


client.commands = new Collection(); 
client.events = new Collection();
client.buttons = new Collection();

client.on("error", console.error);
client.on("warn", console.warn);

const Functions = fs.readdirSync("./handlers").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
const slashcommand = fs.readdirSync("./slash");
const commandFolders = fs.readdirSync("./commands");


(async () => {
	for (file of Functions) {
		require(`./handlers/${file}`)(client);
	}
	client.handleEvents(eventFiles, "./events");
	client.handleSlashCommands(slashcommand, "./slash");
	client.handleCommands(commandFolders, "./commands");
	client.handleButtons();
	client.login(token);
})();

client.on('guildMemberAdd', async (member) => {
    if (member.guild.id !== '882241855381713016') return


    // GIVER ROLLER
    let role2 = member.guild.roles.cache.get('945985560101683260')
    let role3 = member.guild.roles.cache.get('946124965101592626')
    let channel = client.channels.cache.get("946326999293657098")

    member.roles.add(role3)
    member.roles.add(role2)


    const joinEmbed = new MessageEmbed()
        .setColor('#008937')
        .setTitle('<:smartpay:946869753253888020> **SmartPay - Velkommen** <:smartpay:946869753253888020>')
        //.setDescription('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
        .setThumbnail(member.displayAvatarURL({ format: 'png' }))
        .addFields(
            {name: "**Velkommen**", value: `Velkommen <@${member.user.id}>, husk at læse vores regler i <#947585860390502451> !`},     
        )
        .setTimestamp()
    channel.send({ embeds: [joinEmbed] });
});


