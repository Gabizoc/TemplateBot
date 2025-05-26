const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Liste toutes les commandes disponibles'),

    async execute(interaction) {
        const helpEmbed = new EmbedBuilder()
            .setTimestamp()
            .setTitle('Menu d\'aide du bot')
            .addFields(
                { name: '</help:1257346248315240482>', value: 'Affiche le menu d\'aide', inline: true },
            )

        await interaction.reply({ embeds: [helpEmbed] });
    },
};
