const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Botlist Yardım Komutları')
.setTimestamp()
.addField('> v!bot-onayla botid sahipid ', 'Botu Onaylarsınız')
.addField('> v!bot-reddet botid sahipid sebep', 'Botu Reddedersiniz')
.addField('> v!bot-ekle', 'Bot eklersiniz')
.addField('> v!botlist-ayar', 'Ayarlama Komutlarını Gösterir')
.setImage('https://api.creavite.co/out/a509ef88-a50b-4210-bb75-e85362c4462f_standard.gif')
.setFooter('Vegas', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'botlistyardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};