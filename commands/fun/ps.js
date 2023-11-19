const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ps')
		.setDescription('ps - OWNER LIMITED'),
	async execute(interaction) {
		await interaction.reply('<@508105003035131914>');
	},
};

console.log('HEHHE')