const {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
module.exports = {
  name: `adddj`,
  aliases: [`adddjrole`],
  category: `⚙️ Settings`,
  description: `Let's you define a DJ ROLE (as an array, aka you can have multiple)`,
  usage: `adddj @role`,
  memberpermissions: [`ADMINISTRATOR`],
  type: "music",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    //get the role of the mention
    let role = message.mentions.roles.filter(role => role.guild.id == message.guild.id).first();
    //if no pinged role return error
    if (!role)
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setFooter(client.getFooter(es))
          .setTitle(eval(client.la[ls]["cmds"]["settings"]["adddj"]["variable1"]))
        ]
      });
    //try to find the role in the guild just incase he pings a role of a different server
    try {
      message.guild.roles.cache.get(role.id);
    } catch {
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setFooter(client.getFooter(es))
          .setTitle(eval(client.la[ls]["cmds"]["settings"]["adddj"]["variable2"]))
        ]
      });
    }
    //if ther role is already in the Database, return error
    if (client.settings.get(message.guild.id, `djroles`).includes(role.id))
      return message.reply({
        embeds: [new MessageEmbed()
          .setColor(es.wrongcolor)
          .setFooter(client.getFooter(es))
          .setTitle(eval(client.la[ls]["cmds"]["settings"]["adddj"]["variable3"]))
        ]
      });
    //push it into the database
    client.settings.push(message.guild.id, role.id, `djroles`);
    //these lines creates a string with all djroles
    var leftb = client.settings.get(message.guild.id, `djroles`).map(r => `<@&${r}>`);
    if (leftb.length == 0) leftb = client.la[ls]["common"]["nodjs"];
    else leftb = String(leftb.join(", "));

    return message.reply({
      embeds: [new MessageEmbed()
        .setColor(es.color).setThumbnail(es.thumb ? es.footericon && (es.footericon.includes("http://") || es.footericon.includes("https://")) ? es.footericon : client.user.displayAvatarURL() : null)
        .setFooter(client.getFooter(es))
        .setTitle(eval(client.la[ls]["cmds"]["settings"]["adddj"]["variable4"]))
        .setDescription(eval(client.la[ls]["cmds"]["settings"]["adddj"]["variable5"]))
      ]
    });

  }
};