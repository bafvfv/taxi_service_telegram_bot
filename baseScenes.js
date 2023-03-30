const { BaseScene } = require('opengram');

const taxiScene = new BaseScene('taxi_scene');

taxiScene.enter(async ctx => {
    await ctx.reply("Please, send your phone number in '+19998887654' format")
})

taxiScene.leave(async ctx => {
    await ctx.reply('Thank you')
})

taxiScene.on('text', async ctx => {
    if (ctx.message.entities && ctx.message.entities[0].type === "phone_number") {
        ctx.session.number = ctx.message.text
        await ctx.reply('Now please send your location')
    } else {
        await ctx.reply("Please, send your phone number in '+19998887654' format")
    }
})

taxiScene.on('location', async ctx => {
    const CHAT = "-1001000000000"
    const USER = ctx.message.from.first_name
    await ctx.telegram.sendLocation(CHAT, ctx.message.location.latitude, ctx.message.location.longitude)
    await ctx.telegram.sendMessage(CHAT,`User phone number: ${ctx.session.number}\nUser name ${USER}\nTAXI`)
    await ctx.scene.leave()
})

const deliveryScene = new BaseScene('delivery_scene');

deliveryScene.enter(async ctx => {
    await ctx.reply("Please, send your phone number in '+19998887654' format")
})

deliveryScene.leave(async ctx => {
    await ctx.reply('Thank you')
})

deliveryScene.on('text', async ctx => {
    if (ctx.message.entities && ctx.message.entities[0].type === "phone_number") {
        ctx.session.number = ctx.message.text
        await ctx.reply('Now please send your location')
    } else {
        await ctx.reply("Please, send your phone number in '+19998887654' format")
    }
})

deliveryScene.on('location', async ctx => {
    const CHAT = "-1001222222222"
    const USER = ctx.message.from.first_name
    await ctx.telegram.sendLocation(CHAT, ctx.message.location.latitude, ctx.message.location.longitude)
    await ctx.telegram.sendMessage(CHAT,`User phone number: ${ctx.session.number}\nUser name ${USER}\nDELIVERY`)
    await ctx.scene.leave()
})

module.exports = {taxiScene, deliveryScene};
