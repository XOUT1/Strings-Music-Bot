const {
  MessageEmbed,
  MessageActionRow
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  MessageButton
} = require('discord.js')
module.exports = {
  name: "support",
  category: "🔰 Info",
  usage: "invite",
  description: "Sends you the Support Server Link",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let button_support_dc = new MessageButton().setStyle('LINK').setLabel('Support Server').setURL("https://discord.gg/Sw6EWEUGxn")
    let button_public_invite = new MessageButton().setStyle('LINK').setLabel('Github').setURL("https://github.com/XOUT1")
    let button_invite = new MessageButton().setStyle('LINK').setLabel('Invite Strings').setURL(`https://discord.com/api/oauth2/authorize?client_id=772790571693244426&permissions=8&scope=bot%20applications.commands`)
    //array of all buttons
    const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
    message.reply({
      embeds: [new MessageEmbed()
        .setColor(ee.color)
        .setTitle(client.la[ls].cmds.info.support.title)
        .setDescription(eval(client.la[ls]["cmds"]["info"]["support"]["variable1"]))
        .setFooter('Strings Music Bot | Made With ❤ and JS', 'https://tenor.com/view/listening-to-music-dancing-music-notes-enjoying-gif-14460643')
        .setURL("https://discord.com/api/oauth2/authorize?client_id=772790571693244426&permissions=8&scope=bot%20applications.commands")
      ],
      components: allbuttons
    });
  }
}