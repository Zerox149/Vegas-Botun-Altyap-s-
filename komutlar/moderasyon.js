const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Vegas Moderasyon Komutları')
.setTimestamp()
.addField('> v!ban', 'Ban atarsınız')
.addField('> v!byetkilirol', 'Ban yetkilirol ayarlar')
.addField('> v!banlog', 'Banlog ayarlar')
.addField('> v!rol-ver', 'Kullanıcıya belirtilen rolü verir')
.addField('> v!rol-al', 'Kullanıcıya verdiğiniz rolü alır')
.addField('> v!reklamengel', 'Reklam Engel ayarlar')
.addField('> v!everhereengel', 'Ever Here Engel ayarlar')
.addField('> v!capsengel', 'Capsengel ayarlar')
.addField('> v!sayaç', 'Sayaç Sistemini Ayarlarsınız')
.addField('> v!kick', 'Kick Atarsınız')
.addField('> v!afk', 'Afk Sistemi')
.addField('> v!userinfo', 'Kullanıcı Bilgi')
.addField('> v!modlog', 'Mod Logunu Ayarlarsınız')
.addField('> v!kicklog', 'Kick Logunu Ayarlarsınız')
.setImage("https://api.creavite.co/out/32cc39bc-2c17-4416-ab19-12dfcb7239fd_standard.gif")
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
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};