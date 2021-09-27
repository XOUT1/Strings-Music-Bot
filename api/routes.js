const api = require("express").Router();
const { Collection } = require("discord.js");
const { join } = require("path");
let config;
try {
  //Config for testing
  config = require("../dev-config");
} catch {
  //Config for production
  config = require("../botconfig");
}
const Auth = require("./Middlewares/Auth");
const fs = require("fs");

let CommandsDir = join(__dirname, "..", "commands");
let Commands = [];

fs.readdir(CommandsDir, (err, files) => {
  if (err) this.log(err);
  else
    files.forEach((file) => {
      let cmd = require(CommandsDir + "/" + file);
      if (!cmd.name || !cmd.description || !cmd.run) return;
      Commands.push({
        name: cmd.name,
        aliases: cmd.aliases,
        usage: cmd.usage,
        description: cmd.description,
      });
    });
});

api.get("/", (req, res) => {
  res.sendFile(join(__dirname, "..", "views", "index.html"));
});

api.get("/dashboard", Auth, (req, res) => {
  res.sendFile(join(__dirname, "..", "views", "dashboard.html"));
});

api.get("/servers", Auth, (req, res) => {
  res.sendFile(join(__dirname, "..", "views", "servers.html"));
});

api.get("/servers/:id", Auth, (req, res) => {
  if (!req.user.guilds.find((x) => x.id == req.params.id))
    return res.redirect("/servers");
  res.sendFile(join(__dirname, "..", "views", "server.html"));
});

api.get("/api/info", (req, res) => {
  res.send({
    ClientID: config.ClientID,
    Permissions: config.Permissions,
    Scopes: config.Scopes,
    Website: config.Website,
    CallbackURL: config.CallbackURL,
  });
});

api.get("/api/commands", (req, res) => {
  res.send({ commands: Commands });
});

api.get("/logout", (req, res) => {
  if (req.user) req.logout();
  res.redirect("/");
});

api.get("/commandsweb", (req, res) => {
    res.sendfile(join(__dirname, "..", "views", "commands.html"));
});

api.get("/admincommand", (req, res) => {
    res.sendfile(join(__dirname, "..", "views", "admin.html"));
});

api.get("/privacy", (req, res) => {
    res.sendfile(join(__dirname, "..", "views", "privacy.html"));
});

api.get("/SimpleMusic", (req, res) => {
    res.sendfile(join(__dirname, "..", "views", "SimpleMusic.svg"));
});

api.get("/d9c92f5.svg", (req, res) => {
    res.sendfile(join(__dirname, "..", "views", "d9c92f5.svg"));
});

api.get("/b81a9f8.svg", (req, res) => {
    res.sendfile(join(__dirname, "..", "views", "b81a9f8.svg"));
});

api.get("/38ff5d9.svg", (req, res) => {
    res.sendfile(join(__dirname, "..", "views", "38ff5d9.svg"));
});




module.exports = api;
