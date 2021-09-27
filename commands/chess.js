const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "chess",
    description: "play chess with your friends",
    usage: "",
    permissions: {
        channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
        member: [],
    },
    aliases: ["ch"],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {require("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, message, args, { GuildDB }) => {
        if (!message.member.voice.channel) return client.sendTime(message.channel, "❌ | **You must be in a voice channel to play something!**");
        if(!message.member.voice.channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE"))return client.sendTime(message.channel, "❌ | **Bot doesn't have Create Invite Permission**");

        let Invite = await message.member.voice.channel.activityInvite("832012774040141894")//Made using discordjs-activity package
        let embed = new MessageEmbed()
        .setAuthor("Chess Together", "https://support.discord.com/hc/article_attachments/4404615637015/chess_banner.png")
        .setColor("#22a385")
        .setDescription(`
Using **chess Together** you can play chess Together with your friends in a Voice Channel. Click *Join Chess Together* to join in!

__**[Join Chess Together](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
        message.channel.send(embed)
    },
    SlashCommand: {
        options: [
        ],
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
        run: async (client, interaction, args, { GuildDB }) => {
            const guild = client.guilds.cache.get(interaction.guild_id);
            const member = guild.members.cache.get(interaction.member.user.id);

            if (!member.voice.channel) return client.sendTime(interaction, "❌ | You must be in a voice channel to use this command.");
            if(!member.voice.channel.permissionsFor(guild.me).has("CREATE_INSTANT_INVITE"))return client.sendTime(interaction, "❌ | **Bot doesn't have Create Invite Permission**");

            let Invite = await member.voice.channel.activityInvite("832012774040141894")//Made using discordjs-activity package
            let embed = new MessageEmbed()
            .setAuthor("Chess Together", "https://support.discord.com/hc/article_attachments/4404615637015/chess_banner.png")
            .setColor("#2C3E50")
            .setDescription(`
Using **Chess Together** you can play chess with your friends in a Voice Channel. Click *Join chess Together* to join in!

__**[Join Chess Together](https://discord.com/invite/${Invite.code})**__

⚠ **Note:** This only works in Desktop
`)
            interaction.send(embed.toJSON())
        },
    },
};
