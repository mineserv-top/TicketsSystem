const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('./config.json')
function del(msg,client){
    if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send({content: '**Вы не можете использовать команды администратора.**'})
    else if(msg.channel.parentId==config.Tickets.Parent1.ChannelParent || msg.channel.parentId==config.Tickets.Parent2.ChannelParent || msg.channel.parentId==config.Tickets.Parent3.ChannelParent){
        function getId(id){
            var t = client.db.get(id)
            return t
        }
        const embed = new EmbedBuilder()
        .setColor('#00bd6d')
        .setAuthor({
            name: 'Удаление тикета!'
        })
        .setDescription('**Тикет будет безвозвратно удалён через 30 секунд!**')
        .setThumbnail(config.thumbImage)
        .setFooter({
            text: config.footerText
        })
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId('deletestop')
            .setLabel('отменить')
            .setEmoji('☺️')
            .setStyle(ButtonStyle.Success),
        )
        msg.reply({
            embeds: [embed],
            components: [row]
        })
        client.db.set(msg.channel.id,'delete')
        setTimeout(() => {
            if(getId(msg.channel.id)=='delete'){
                msg.channel.delete()
            }
            else{
                msg.channel.send({
                    content: "Канал не удалён"
                })
            }
        }, 30000)
    }
    else{
        msg.channel.send({
            content:'**Этот канал нельзя удалить.**'
        })
    }
}
var comms_list = [
  {
    name: "del",
    out: del,
    about: "Удалить канал."
  }
]
module.exports.comms = comms_list