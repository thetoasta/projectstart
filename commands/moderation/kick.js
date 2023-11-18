const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
	.setName('kick')
	.setDescription('Select a member and kick them.')
    .addUserOption(option =>
		option
			.setName('target')
			.setDescription('The member to kick')
			.setRequired(true))
	.setDefaultMemberPermissions(PermissionFlagsBits.KickMembers),
	async execute(interaction) {
        const member = interaction.options.getMember('target');
        member.kick();
	},
};