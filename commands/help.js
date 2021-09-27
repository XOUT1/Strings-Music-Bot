const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description: "Information about the bot",
  usage: "[command]",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["command", "commands", "cmd","h"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
   run: async (client, message, args, { GuildDB }) => {
    let Embed = new MessageEmbed()
            .setAuthor("Strings🎶", "https://cdn.discordapp.com/attachments/802907616451231756/883990127045664768/Light.png", "https://www.stringsmusicbot.tk/")
            .setTitle("Strings Music Bot")
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/attachments/802907616451231756/883990127045664768/Light.png")
            .setFooter("Bot Developed by XOUT#0509 and mochiron_desu#0057")
            .setDescription("")
  

    if (!args[0]) message.channel.send(Embed);
    else {
      let cmd =
        client.commands.get(args[0]) ||
        client.commands.find((x) => x.aliases && x.aliases.includes(args[0]));
      if (!cmd)
        return client.sendTime(message.channel, `❌ | Unable to find that command.`);

      let embed = new MessageEmbed()
        .setAuthor("Strings🎶", "https://cdn.discordapp.com/attachments/802907616451231756/883990127045664768/Light.png", "https://www.stringsmusicbot.tk/")
        .setDescription("")
        .setColor("RANDOM")
        .setThumbnail("https://cdn.discordapp.com/attachments/802907616451231756/883990127045664768/Light.png")
        .setFooter("Bot Developed by XOUT#0509 and mochiron_desu#0057")

      message.channel.send(embed);
    }
  },

SlashCommand: {
    options: [
      {
        name: "command",
        description: "Get information on a specific command",
        value: "command",
        type: 3,
        required: false
      },
    ],
    /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */

    run: async (client, interaction, args, { GuildDB }) => {
      let Commands = client.commands.map(
        (cmd) =>
          `\`${GuildDB ? GuildDB.prefix : client.config.DefaultPrefix}${
            cmd.name
          }${cmd.usage ? " " + cmd.usage : ""}\` - ${cmd.description}`
      );
  
      let Embed = new MessageEmbed()
            .setAuthor("Strings🎶", "https://cdn.discordapp.com/attachments/802907616451231756/883990127045664768/Light.png", "https://www.stringsmusicbot.tk/")
            .setColor("RANDOM")
            .setThumbnail("https://cdn.discordapp.com/attachments/802907616451231756/883990127045664768/Light.png")
            .setDescription("")
            .setFooter("Bot Developed by XOUT#0509 and mochiron_desu#0057");
      if (!args) return interaction.send(Embed);
      else {
        let cmd =
          client.commands.get(args[0].value) ||
          client.commands.find((x) => x.aliases && x.aliases.includes(args[0].value));
        if (!cmd)
          return client.sendTime(interaction, `❌ | Unable to find that command.`);
  
        let embed = new MessageEmbed()
          .setAuthor("Strings🎶", "https://cdn.discordapp.com/attachments/802907616451231756/883990127045664768/Light.png", "https://www.stringsmusicbot.tk/")
          .setDescription("")
          .setColor("RANDOM")
          .setThumbnail("https://cdn.discordapp.com/attachments/802907616451231756/883990127045664768/Light.png")
          .setFooter("Bot Developed by XOUT#0509 and mochiron_desu#0057");
  
        interaction.send(embed);
      }
  },
}};
