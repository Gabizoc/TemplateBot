const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
    try {
        console.log('Started deleting application (/) commands.');

        const globalCommands = await rest.get(Routes.applicationCommands(clientId));
        for (const command of globalCommands) {
            await rest.delete(Routes.applicationCommand(clientId, command.id));
            console.log(`Deleted global command: ${command.name}`);
        }

        const guildCommands = await rest.get(Routes.applicationGuildCommands(clientId, guildId));
        for (const command of guildCommands) {
            await rest.delete(Routes.applicationGuildCommand(clientId, guildId, command.id));
            console.log(`Deleted guild command: ${command.name}`);
        }

        console.log('Successfully deleted all application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
