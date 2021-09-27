module.exports = {
  Admins: ["XOUT#0509", "mochiron_desu#0057"], //Admins of the bot
  ExpressServer: true,//If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/6UYfuekqTf", //Support Server Link
  Token: process.env.Token || "NzcyNzkwNTcxNjkzMjQ0NDI2.X5_zTg.WGAmzcRTJ-juAtuy3gX7wiZWZC0", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "772790571693244426", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "4OCvgupDB9ijgBJLV6dGBRk73nxg0A_t", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //24/7 in vc
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://c.tenor.com/HJvqN2i4Zs4AAAAj/milk-and-mocha-cute.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
 
  Website: process.env.Website || "https://www.stringsmusicbot.tk",

  //Lavalink
   Lavalink: {
    id: "Main",
    host: "lavalink-replit.xout.repl.co",
    port: 443,
    pass: "maybeiwasboring", 
    secure: true, // Set this to true if you're self-hosting lavalink on replit.
  },
  
  //Alternate Lavalink
  /*
  Lavalink: {
    id: "Main",
    host: "lava.sudhan.tech",
    port: 1234,
    pass: "CodingWithSudhan", 
    secure: false // Set this to true if you're self-hosting lavalink on replit.
  },
  */

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "45b7381d72894fd2a49e691c3622a063", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "1b2c06e265a349e48f1d9630cc7b6efc", //Spotify Client Secret
  },
};