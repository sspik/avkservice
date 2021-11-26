const TelegramApi = require('node-telegram-bot-api')

const token = '2121760560:AAG6pHQ06pD3uWHS2YW225mdJ7FxosBuPgU'
const bot = new TelegramApi(token, { polling: true })
bot.on('message', (msg) => {
    console.log(msg)
})
