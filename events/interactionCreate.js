module.exports = {
    name: "interactionCreate",
    async execute(interaction, client) {

        //console.log(`Interaction ${interaction.id} is not a command`);
        if (!interaction.isCommand()) {
            const button = client.buttons.get(interaction.customId);
            if (!button) return await interaction.reply({ content: "Jeg kunne ikke finde knappen." });

            try {
                await button.execute(interaction, client);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: "An error occurred while executing that command.",
                    ephemeral: true,
                });
            }
            
        }
        if (interaction.isButton()) return;
            console.log(`Interaction ${interaction.id} is not a command`);
            const command = client.commands.get(interaction.commandName);
            
            if (!command) return;

            try {
                if (command.permissions && command.permissions.length > 0) {
                    if (!interaction.member.permissions.has(command.permissions)) return await interaction.reply({ content: "Yeu do nut have permission to use this comand." });
                }

                await command.execute(interaction, client);
            } catch (error) {
                console.error(error);
                
                await interaction.reply({
                    content: "An error occurred while executing that command.",
                    ephemeral: true,
                });
            }
        
        
    }
         
        
    
};

    