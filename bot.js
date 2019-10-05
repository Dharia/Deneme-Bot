const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot giriş yaptı! ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'sa') {
    msg.reply('as!');
  }
});

client.login('Botunuzun idsi(İd'yi girmeden bot cevrimiçi olmaz)');