const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const config = require('./config.json')
function del(msg,client){
    if (!msg.member.permissions.has("ADMINISTRATOR")) return msg.channel.send({content: '**Вы не можете использовать команды администратора.**'})
    else if(msg.channel.parentId==config.Tickets.Category1.ChannelParent || msg.channel.parentId==config.Tickets.Category2.ChannelParent || msg.channel.parentId==config.Tickets.Category3.ChannelParent){
        const time = new Date()
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
                msg.channel.delete().then((i)=>{
                    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[32mINFO \x1b[37m| \x1b[36mКанал \x1b[33m'+i.id+' \x1b[36mбыл удалён.\x1b[0m')
                }).catch((e)=>{
                    console.log('\x1b[1m\x1b[33m'+time+' \x1b[37m| \x1b[31mERROR \x1b[37m| \x1b[36mПроизошла Ошибка > \x1b[31m'+e+'\x1b[0m')
                })
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