require('dotenv').config();
const {Opengram, Stage, BaseScene, session} = require('opengram');
const {taxiKeyboard, deliveryKeyboard} = require('./keyboards');
const {taxiScene, deliveryScene} = require('./baseScenes');

const deliverySticker = "CAACAgIAAxkBAAIVwGQkEw6MH937CUEOPZ9QEAd1xAABiQACpgwAAl3b6EuwssAGdg1yFS8E"
const taxiSticker = "CAACAgEAAxkBAAIVx2QkFvupWObXUmKFCqtlimGEr5DMAAI4AwACWy4YRE4hucc1zq2FLwQ"

const bot = new Opengram(process.env.BOT_TOKEN);

bot.use(Opengram.log())
bot.use(session())
bot.use(new Stage([taxiScene, deliveryScene], {ttl: 1000}).register())

bot.start(async (ctx) => {
    await ctx.replyWithSticker(deliverySticker, deliveryKeyboard)
    await ctx.replyWithSticker(taxiSticker, taxiKeyboard)
})

bot.action('dlvr', async (ctx) => {
    await ctx.scene.enter('delivery_scene')
})

bot.action('taxi', async (ctx) => {
    await ctx.scene.enter('taxi_scene')
})

bot.launch({
    drop_pending_updates: true
})
.then(() => console.log('Bot started successfully'))

// Enable graceful stop
process.once('SIGINT', () => bot.stop())
process.once('SIGTERM', () => bot.stop())