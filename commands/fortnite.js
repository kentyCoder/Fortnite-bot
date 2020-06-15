const Fortnite = require('fortnite');
const stats = new Fortnite()

exports.run = (client, message, args, tools) => {
  
  let platform;
  let username;
 
  if (!['pc', 'xbl', 'psn'].includes(args)) message.channel.send('**Please include the plataform: `!fortnite <plataform> <username>`**');
  if (!args[1]) message.channel.send('**Please include the username: `!fortnite <platform> <username>`**');
  platform = args.shift();
  username = args.join(' ');
  
  stats.getInfo(username, platform).then( data => {
    
  })
  
  
}