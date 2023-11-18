// make sure it knows itself
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// create the brain
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// give a brain
client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

// brain turn on
client.login(token);