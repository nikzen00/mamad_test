const Discord = require("discord.js");
const bot = new Discord.Client();
const token = "";
const prefix = "#";

bot.on("ready", () => {
  //اعلام امادی بات
  console.log("iam ready");
  //وضعیت بات دیسکرد
  bot.user.setStatus("online");
});

bot.login(token);
