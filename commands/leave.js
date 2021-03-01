module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Müziği durdurmak için bir ses kanalında olman gerekiyor.");
        await voiceChannel.leave();
        await message.channel.send('Ses kanalından ayrılıyorum. :smiling_face_with_tear:')
 
    }
}