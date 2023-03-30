const { Markup, Extra } = require('opengram');

const taxiKeyboard = Markup.inlineKeyboard([Markup.callbackButton('🚕 TAXI', 'taxi')]).extra()

const deliveryKeyboard = Markup.inlineKeyboard([Markup.callbackButton('🛵 DELIVERY', 'dlvr')]).extra()

const vanKeyboard = Markup.inlineKeyboard([Markup.callbackButton('🚌 MINIVAN', 'mvan')]).extra()

const cargoKeyboard = Markup.inlineKeyboard([Markup.callbackButton('🚚 CARGO', 'crgo')]).extra()

module.exports = {taxiKeyboard, deliveryKeyboard, vanKeyboard, cargoKeyboard};
