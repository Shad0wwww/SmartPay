
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const fs = require('fs');
const { token, clientId, guildId } = require("../config.json")
module.exports = (client) => {
    client.handleSlashCommands = async (slashcommand, path) => {
        client.commandArray = [];
        for (folder of slashcommand) {
            const commandFiles = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles) {
                const command = require(`../slash/${folder}/${file}`);
                // set a new item in the Collection
                // with the key as the command name and the value as the exported module
                client.commands.set(command.data.name, command);
                client.commandArray.push(command.data.toJSON());

            }
        }
        const rest = new REST({
			version: "9",
		}).setToken(token);

		(async () => {
			try {
                console.log("loader")
				await rest.put(
                    Routes.applicationGuildCommands(clientId, guildId),
                    { body: client.commandArray },
                );
				console.log("Successfully registered commands locally.");
				
			} catch (err) {
				if (err) console.error(err);
			}
		})();
        
    };
    
};
   