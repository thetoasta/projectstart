const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lonely')
		.setDescription('he sad'),
	async execute(interaction) {
		await interaction.reply('HE LONELY HELP HIM');
	},
};

console.log('command: lonely (/commands/fun/lonely.js')