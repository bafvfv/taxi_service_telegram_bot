const { Markup, Extra} = require('opengram');

const taxiKeyboard = Markup.inlineKeyboard([Markup.callbackButton('🚕 TAXI', 'taxi')]).extra()//, Markup.callbackButton('🚫 BACK', 'back')]).extra();

const deliveryKeyboard = Markup.inlineKeyboard([Markup.callbackButton('🛵 DELIVERY', 'dlvr')]).extra()//, Markup.callbackButton('🚫 BACK', 'back')]).extra();

const vanKeyboard = Markup.inlineKeyboard([Markup.callbackButton('🚌 MINIVAN', 'mvan')]).extra()//, Markup.callbackButton('🚫 BACK', 'back')]).extra();

const cargoKeyboard = Markup.inlineKeyboard([Markup.callbackButton('🚚 CARGO', 'crgo')]).extra()//, Markup.callbackButton('🚫 BACK', 'back')]).extra();

module.exports = {taxiKeyboard, deliveryKeyboard, vanKeyboard, cargoKeyboard};
