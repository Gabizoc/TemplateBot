module.exports = async (client, interaction) => {
    if (interaction.isCommand()) {
        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: ' Une erreur s\'est produite !', ephemeral: true });
        }
    }
};
