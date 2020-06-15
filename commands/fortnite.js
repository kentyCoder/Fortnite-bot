const Fortnite = require('fortnite');
const stats = new Fortnite()
const Discord = require('Discord.js');

exports.run = (client, message, args, tools) => {
  
  let platform;
  let username;
 
  if (!['pc', 'xbl', 'psn'].includes(args[0])) message.channel.send('**Please include the plataform: `!fortnite [pc | xbl | psn ] <username>`**');
  if (!args[1]) message.channel.send('**Please include the username: `!fortnite [pc | xbl | psn] <username>`**');
  platform = args.shift();
  username = args.join(' ');
  
  stats.getInfo(username, platform).then( data => {
    
    const embed = new Discord.MessageEmbed()
      .setColor(0xffffff)
    
  })
  .catch(error => {
    
    message.channel.send('Username not found!');
  })
  
  
}