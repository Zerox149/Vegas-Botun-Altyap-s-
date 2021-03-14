const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(' Vegas Eğlence Komutları')
.setTimestamp()
.addField('> v!ilginçbilgi', 'İlginç bilgi verir')
.addField('> v!kartopu', 'Karopu Atarsın')
.addField('> v!oylama', 'Oylama Yaparsınız')
.addField('> v!espri', 'Espri Yaparsınız')
.addField('> v!adamasmaca', 'Adam Asmaca oynarsınız')
.addField('> v!emojiekle', 'Emoji Ekler')
.setImage("https://api.creavite.co/out/059d2d96-77d6-442e-b6b9-ca80a49b2b82_standard.gif")
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};