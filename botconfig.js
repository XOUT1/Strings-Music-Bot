module.exports = {
  Admins: ["XOUT#0509", "mochiron_desu#0057"], 
  ExpressServer: true,
  DefaultPrefix: process.env.Prefix || ">", 
  Port: 3000, 
  SupportServer: "https://discord.gg/6UYfuekqTf", 
  Token: process.env.Token || "BOT TOKEN", 
  ClientID: process.env.Discord_ClientID || "BOT CLIENT ID", 
  ClientSecret: process.env.Discord_ClientSecret || "BOT CLIENT SECRET", 
  Scopes: ["identify", "guilds", "applications.commands"],
  CallbackURL: "/api/callback",
  "24/7": true,
  CookieSecret: "Strings",
  IconURL:
    "https://c.tenor.com/HJvqN2i4Zs4AAAAj/milk-and-mocha-cute.gif",
  Permissions: 2205280576,
 
  Website: process.env.Website || "https://www.stringsmusicbot.tk",

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lavalink-replit.xout.repl.co",
    port: 443,
    pass: "maybeiwasboring", 
    secure: true, //self hosting=true
  },
  


  Spotify: {
    ClientID: process.env.Spotify_ClientID || "", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "", //Spotify Client Secret
  },
};
