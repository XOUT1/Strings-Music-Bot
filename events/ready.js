module.exports = async (client) => {
  client.Ready = true, 
  client.user.setPresence({
    status: "dnd",  // You can show online, idle, and dnd
    activity: {
        name: "with depression",  // The message shown
        type: "STREAMING", // PLAYING, WATCHING, LISTENING, STREAMING,
        url: "https://www.twitch.tv/leekbeats"
    }
});
    client.Manager.init(client.user.id);
    client.log("Successfully Logged in as " + client.user.tag); // You can change the text if you want, but DO NOT REMOVE "client.user.tag"
client.RegisterSlashCommands();
};

