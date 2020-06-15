const Fortnite = require('fortnite');
const stats = new Fortnite()
const Discord = require('Discord.js');

exports.run = (client, message, args, tools) => {
  
  let platform;
  let username;
 
  if (!['pc', 'xbl', 'psn'].includes(args[0])) return message.channel.send('**Please include the plataform: `!fortnite [pc | xbl | psn ] <username>`**');
  if (!args[1]) return message.channel.send('**Please include the username: `!fortnite [pc | xbl | psn] <username>`**');
  platform = args.shift();
  username = args.join(' ');
  
  stats.getInfo(username, platform).then( data => {
    
    const embed = new Discord.MessageEmbed()
      .setColor(0xffffff)
      .setTitle(`Stats for ${data.username}`)
      .setDescription(`**Top Placement, `**Top 3:** *${data.lifetimeStats[0].value}*\n**Top 5:** *${data.lifetimeStats[1].value}*\n**Top 6:** *${data.lifetimeStats[3].value}*\n**Top 12:** *${data.lifetimeStats[4].value}*\n**Top 25:** *${data.lifetimeStats[5].value}*`, true)
    .addField('Total Score', data.lifetimeStats[6].value)
    .addField('Matches Played', data.lifetimeStats[7].value, true)
    .addfield('Wins', data.lifetimeStats[8].value, true)
    .addfield('Win Percentage', data.lifetimeStats[9].value, true)
    .addfield('Kills', data.lifetimeStats[10].value, true)
    .addfield('K/D Ratio', data.lifetimeStats[11].value, true)
    .addfield('Kills Per Minute', data.lifetimeStats[12].value, true)
    .addfield('Time Played', data.lifetimeStats[13].value, true)
    .addfield('Average Survival Time', data.lifetimeStats[14].value, true)
    
    message.channel.send(embed)
    
  })
  .catch(error => {
    
    message.channel.send('Username not found!');
  })
  
  
}