//============-NewTickets BY Alpha-============
//===================-VAR`S-===================
const fs = require('fs')
const {Client, MessageEmbed, Intents, MessageActionRow, MessageButton} = require('discord.js');
const client = new Client({ intents: 32767 })
const discordModals = require('discord-modals')
discordModals(client)
const Discord = require('discord.js')
const config = require('./config.json')
client.discord = Discord
client.config = config 
const token = config.token
//=============-DISCORD BOT LOGIN-=============
client.login(token)
//===================-EVENTS-==================
const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
for (const file of events){
    const event = require(`./events/${file}`)
    client.on(event.name, (...args) => event.execute(...args, client))
}
client.on('messageCreate', (msg) => {
  const prefix = config.prefix
    const comms = require("./comms.js")
    if (msg.author.username != client.user.username && msg.author.discriminator != client.user.discriminator) {
      var comm = msg.content.trim() + " "
      var comm_name = comm.slice(0, comm.indexOf(" "));
      var messArr = comm.split(" ");
      for (comm_count in comms.comms) {
        var comm2 = prefix + comms.comms[comm_count].name;
        if (comm2 == comm_name) {
          comms.comms[comm_count].out(client, msg, messArr);
        }
      }
    }
  }
)