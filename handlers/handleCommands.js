const fs = require('fs');

module.exports = async (client) => {
    client.handleCommands = async (commandFolders, path) => {
        
        for (folder of commandFolders) {
            const commandFiles1 = fs.readdirSync(`${path}/${folder}`).filter(file => file.endsWith('.js'));
            for (const file of commandFiles1) {
                const command1 = require(`../commands/${folder}/${file}`);
                // set a new item in the Collection
                // with the key as the command name and the value as the exported module
                console.log(`${folder} og ${file}`)
                client.commands.set(command1.name, command1);

            }
        }

    }
}