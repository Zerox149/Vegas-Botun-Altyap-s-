const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField(' Vegas',`
Vegas Abone Yardım Menüsü  

**v!abonelog** 
 Abone Log'u ayarlarsınız

 **v!abone-y-rol** 
 Abone Yetkili Rolü Ayarlarsınız

 **v!abone** 
Abone rolü verirsiniz
`)
.setImage("https://api.creavite.co/out/1c00669b-249f-4ea5-8449-503d059bbbda_standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'aboneyardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};