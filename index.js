const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hello World!!")
})

app.listen(3000,() => {
  console.log("Project is ready!")
})

let Discord = require("discord.js");
let client = new Discord.Client();
client.setMaxListeners(0);
const moment = require("moment")
const random = require("something-random-on-discord").Random

//status
client.on('ready', () => {
 console.log(`Discord.js: Ready on: ${client.user.tag} ✅`)

 const arrayOfStatus = [
    `Watching Attack On Titan ⚔️⚜️⛩🔰`,
    `Among Us 🔪`,
    `Coding My freind 💻`,
    `Listening to your favourite Music 🎵`,
    `--help || By CodeMaster100#7978`,
 ];
  
  let index = 0;
  setInterval(() => {
    if(index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    //console.log(status);
    client.user.setActivity(status);
    index++;
  }, 5000)
});

//snipe message delete event
client.snipes = new Discord.Collection
client.on('messageDelete', function(message, channel) {
	client.snipes.set(message.channel.id, {
		content: message.content,
		author: message.author,
		image: message.attachments.first()
			? message.attachments.first().proxyURL
			: null
	});
});

//rick roll command
client.on("message", message => {
if (message.content === "--rr") {
 message.channel.send("https://tenor.com/bItJt.gif")
 message.channel.send("you have been rick rolled")
}
//kick
if (message.content.startsWith("--kick")) {
 if (message.member.hasPermission("KICK_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.kick().then(mem => {
 message.channel.send(`Kicked ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
 //avatar
if (message.content === "--avatar" || message.content === "--Avatar" || message.content === "--AVATAR") { 
 let embed = new Discord.MessageEmbed()
.setTitle("YOUR AVATAR!")
.setImage(`${message.author.displayAvatarURL({dynamic : true})}`)
.setColor("RANDOM")
.setFooter(`${message.author.username}`)
message.channel.send(embed)
}
//help
if(message.content.startsWith("--help")) {
let embed = new Discord.MessageEmbed()
.setTitle("SENPAI BOT COMMAND")
.addField("GAME COMMANDS:video_game:",
'`--rps`' )
.addField("FUN COMMANDS",
'`--rr`, ' + '`--hack`,' + '`--coinflip`, ' + '`--roast`, ' + '`--fact`, ' + '`--say`, ' + '`--kill`, ' + '`--timer`')
.addField("MODERATION COMMANDS",
'`--kick`, ' + '`--ban`, ' + '`--purge`, ' + '`--mute`, ' + '`--unmute`, ' + '`--membercount`, ' + '`--serverinfo`')
.addField("TECHNOLOGY COMMANDS:man_technologist:",
'`--avatar`, ' + '`--snipe`')
.addField("INVITE ME",
'`--invite`')
.addField("JOIN MY SUPPORT SERVER",
'`--server`')
.setColor("RANDOM")
.setFooter("Created by: CodeMaster100#7978 ")
.setTimestamp()
message.channel.send(embed)
}
//rps
if (message.content === "--rps" || message.content === "--Rps" || message.content === "--RPS") {
 message.channel.send(":x: | PICK AN OBJECT TO PLAY RPS WITH! EXAMPLE: ****--rps rock**** | :x:")
 }

 if (message.content === "--rps rock" || message.content === "--Rps rock" || message.content === "--RPS ROCK") {
 let replies = ["YOU CHOSE ***ROCK***, I CHOSE ***PAPER***. ****PAPER**** WINS!", "YOU CHOSE ***ROCK***, I CHOSE ***SCISSORS***. ****ROCK**** WINS!", "YOU CHOSE ***ROCK***, I CHOSE ***ROCK***. IT'S A TIE!"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === "--rps paper" || message.content === "--Rps paper" || message.content === "--RPS PAPER") {
 let replies = ["YOU CHOSE ***PAPER***, I CHOSE ***ROCK***. ****PAPER**** WINS!", "YOU CHOSE ***PAPER***, I CHOSE ***SCISSORS***. ****SCISSORS**** WIN!", "YOU CHOSE ***PAPER***, I CHOSE ***PAPER***. IT'S A TIE!"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }

 if (message.content === "--rps scissors" || message.content === "--Rps scissors" || message.content === "--RPS SCISSORS") {
 let replies = ["YOU CHOSE ***SCISSORS***, I CHOSE ***ROCK***. ****ROCK WINS!****", "YOU CHOSE ***SCISSORS***, I CHOSE ***PAPER***. ****SCISSORS WIN!***", "YOU CHOSE ***SCISSORS***, I CHOSE ***SCISSORS***. ****SCISSORS**** WIN!"]
 message.channel.send(replies[Math.floor(Math.random() * replies.length)])
 }
 //invite
 if (message.content.toLowerCase() === "--invite") {
    let owner = client.users.cache.get("779749147989245972")
    let embed = new Discord.MessageEmbed()
      .setTitle("Here is my invite link")
      .setDescription(
       "https://discord.com/oauth2/authorize?client_id=909014750015402004&scope=bot&permissions=8589934591"
      )
      .addField("Hope you like It",
      ':smiley:')
      .setColor("RANDOM")
      .setFooter(`Created by ${owner.username}`, owner.displayAvatarURL());
    message.channel.send(embed);
  }                                                              

//hac   
if(message.content.startsWith("--hack")) {
const user = message.mentions.users.first();
if(!user) return message.channel.send("Mention Someone to hack")
message.channel.send("**[25%]** Finding IP..").then(m => {
setTimeout(() => {
m.edit("**[50%]** IP FOUND! Looking for email and password..").then(m2 => {
setTimeout(() => {
m2.edit(`**[75%]** DONE! email: ${user.username}@icloud.com | password: XjdhgikshGdk`).then(m3 => {
setTimeout(() => {
m3.edit("**[100%]** Deleting System32..").then(m4 => {
setTimeout(() => {
m4.edit(`done hacking ${user}! all info was sent online.`)
}, 5500);
});
}, 2800);
});
}, 4500);
});
}, 5000);
});
};

 //coinflip
 if (message.content === "--coinflip") {
 let replies = ["Heads", "Tails"];
 message.channel.send(replies[Math.floor(Math.random() * replies.length)]);
 }
 //ban
 if (message.content.startsWith("--ban")) {
 if (message.member.hasPermission("BAN_MEMBERS")) {
 let member = message.mentions.members.first()
 if (!member) message.channel.send("Please mention someone")
 else {
 member.ban().then(mem => {
 message.channel.send(`Banned ${mem.user.username}!`)
 })
 }
 } else {
 message.reply("You don't have the permission to do that...")
 }
 }
//purge
 if(message.content.startsWith("--purge")){
let arg = message.content.split(" ")
if(message.member.hasPermission("MANAGE_MESSAGES")) {
let clear = arg[1];
if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
**Example:** \`_purge 50\` `)
if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")

message.channel.bulkDelete(clear)
message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If purge fails please make sure I have MANAGE_MESSAGES to make the purge seccessful.\` `)
.then(message => 
 message.delete({timeout: 10000})
 )
}else{
message.reply("You dont have perms!")
} 
}
//mute
if(message.content.startsWith("--mute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to mute!")
 else {
 member.roles.add("YOUR MUTED ROLE ID HERE")
 message.channel.send("Member has been succesfully muted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
//unmute
if(message.content.startsWith("--unmute")) {
 if(message.member.hasPermission("ADMINISTRATOR")) {
 let member = message.mentions.members.first()
 if(!member) message.channel.send("mention someone to unmute!")
 else {
 member.roles.remove("Muted role id here")
 message.channel.send("Member has been succesfully unmuted.")
 }

 }else {
 message.reply("You don't have permission to do that!")
 }
}
//eval
if(message.content.startsWith(`--eval`)){

const notowner = new Discord.MessageEmbed()
.setDescription("Only the bot owner can use this command")
.setColor("RED")
const owners_id = ["779749147989245972"];
 if (!owners_id.includes(message.author.id))
 return message.channel.send(notowner); const args2 = message.content.split(" ").slice(1);

 const clean = text => {
 if (typeof(text) === "string")
 return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
 else
 return text;
}
 
 try {
 const code = args2.join(" ");
 let evaled = eval(code);
const lmao = message.content.slice("".length).trim().split(/ +/);
lmao.shift().toLowerCase().split(" ")[0]
msg.channel.send(lmao.join(" "))
 const { inspect } = require("util");
const output = clean(evaled)

 const eval2 = new Discord.MessageEmbed()
 .addField("Input", `\`\`\`js\n${lmao.join(" ")}\`\`\``)
 .addField("Output", `\`\`\`js\n${output}\`\`\``)
 
 // msg.channel.send(clean(evaled));
 message.channel.send(eval2)
 } catch (err) {
 message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
 }
};
//snipe
  if (message.content === "--snipe") {
     let channel = message.mentions.channels.first() || message.channel
  let sniped = client.snipes.get(channel.id)
  if(!sniped) {
    message.channel.send(" :x: | There is nothing to snipe in " + channel.name)
  } else {
    let em = new Discord.MessageEmbed()
    .setAuthor(sniped.author.tag, sniped.author.displayAvatarURL())
    .setDescription(sniped.content)
    .setColor("GREEN")
    .setTimestamp()
    if(sniped.image) {
      em.setThumbnail(sniped.image)
    }
    message.channel.send(em)
  }
  }

//roast
if(message.content.toLowerCase().startsWith("--roast")){
 let user = message.mentions.users.first() || message.author
 let roasts = [`${user}, You look like you chomp on tree bark for fun`, `${user}, You're ugly when you cry.`, `${user}, When you die, people will struggle to think of nice things to say about you.`, `${user}, May the fleas of ten thousand camels live happily upon your buttocks`, `${user}, Your birth certificate is an apology letter from the abortion clinic.`, `${user}, The pitch of your voice drives dogs insane`, `${user}, I would call you a cunt, but you lack the warmth or the depth.`]
 message.channel.send(roasts[Math.floor(Math.random() * roasts.length)])
}
//funfact
if(message.content.startsWith("--fact")){
 let ff =["Some fungi create zombies, then control their minds", "The first oranges weren’t orange", "There’s only one letter that doesn’t appear in any U.S. state name", "A cow-bison hybrid is called a beefalo", "Johnny Appleseed’s fruits weren’t for eating", "Scotland has 421 words for snow" , "Samsung tests phone durability with a butt-shaped robot", "The “Windy City” name has nothing to do with Chicago weather", "Peanuts aren’t technically nut", "Armadillo shells are bulletproof", "You are a sussy baka", "Firefighters use wetting agents to make water wetter", "The longest English word is 189,819 letters long", "Octopuses lay 56,000 eggs at a time", "Cats have fewer toes on their back paws", "Blue whales eat half a million calories in one mouthful"]
let funfact = new Discord.MessageEmbed()
 .setTitle("Fun And Fake Fact!")
 .setDescription(`${ff[Math.floor(Math.random() * ff.length)]}`)
 .setColor("RANDOM")
 .setFooter(`Made By CodeMaster100#7978`);
 message.channel.send(funfact)
}
//membercount
  if (message.content.toLowerCase() === "--membercount") {

    message.channel.send(message.guild.memberCount)
  }

//ServerInfo
if(message.content === "--serverinfo") {
 let embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setAuthor(`Info for ${message.guild}`, message.guild.iconURL({ dynamic: true }))
 .addField("Owner", message.guild.owner, true)
 .addField("Channels", message.guild.channels.cache.size, true)
 .addField("Roles", message.guild.roles.cache.size, true)
 .addField("Emojis", message.guild.emojis.cache.size, true)
 .addField("Verification Level", message.guild.verificationLevel, true)
 .addField("Region", `${message.guild.region}`, true)
 .setThumbnail(message.guild.iconURL({ dynamic: true }))
 .setFooter(`ID: ${message.guild.id}, Created • ${message.guild.createdAt.toDateString()}`)

 message.channel.send(embed)
}
//say
 if (message.content.toLowerCase().startsWith("--say")) {
 message.delete()
 let say = message.content.split(" ")
 let content = say.slice(1).join(" ")
 if (!content) message.reply("What You Want Me To Say")
 

 else {
 message.channel.send(`${content}`)
 }
}
//kill
 if(message.content.startsWith("--kill")) {
 let victim = message.mentions.users.first()
 if(!victim) message.reply("Mention someone to Kill")
 else{
let replies = [ (`${victim} has been shot`), (`${victim} has been stabbed`), (`${victim} has been drowned`), 
 (`${victim} has been electrified`), (`A goose honked at ${victim} to death`), 
 (`Some psychopath zapped ${victim} with his laser eyes`), 
 (`${victim} ate a poisonous potato`), (`${victim} died from slowmode being to long`), 
 (`${victim} was run over by car`), (`${victim} was pushed in lava`), (`${victim} was banned by the server owner`), 
 (`${victim} was found dead in a dumpster`), 
 (`Someone named Joe was found chewing on ${victim}'s leg`), (`${victim} got drunk and fell in the water`), 
 (`${victim} made a deal with the devil`), (`${victim} was hacked by an 
Oreo`), (`An alien named MEE6 abducted ${victim} in their sleep`),]

 message.channel.send(`${replies[Math.floor(Math.random() * replies.length)]}`) 
 }
 }
 //Support Server
 if (message.content.toLowerCase() === "--server") {
    let owner = client.users.cache.get("779749147989245972")
    let embed = new Discord.MessageEmbed()
      .setTitle("Here is my Support Server Invite Link")
      .setDescription(
       "https://discord.gg/N4HCXMxmR8"
      )
      .addField("This Is The Support Server Of Senpai Bot",
      ':smiley:')
      .setColor("RANDOM")
      .setFooter(`Created by ${owner.username}`, owner.displayAvatarURL());
    message.channel.send(embed);
  }                                                              
//timer
if(message.content.toLowerCase().startsWith('--timer')){
 const args = message.content.split(' ').splice(1);
 if(!args[0]) return message.channel.send('please include a valid time');
 if(isNaN(args[0])) return message.channel.send('please include a valid number');
 if(!args[1]) return message.channel.send('you have to include something for me to remind you with')
 setTimeout(() => {
 const msg = args.splice(1).join(' ');
 message.channel.send(`${message.author}, ${msg}`)
 }, parseInt(args[0], 10) * 1000)
}
});



client.login(process.env.token)