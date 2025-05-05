import {Conversation, InputMedia, TelegramClient} from '@mtcute/node'

import * as env from './env.js'

const tg = new TelegramClient({
    apiId: env.API_ID,
    apiHash: env.API_HASH,
    storage: 'bot-data/session',
})


const user = await tg.start({botToken: env.BOT_TOKEN})
console.log('Logged in as', user.username)

let toUser: string | number = env.TO_USER
if(/^[\d-]+$/.test(toUser)) {
    console.log("Detect id, so convert it to id. For phone number start user id with +")
    toUser = Number.parseInt(toUser)
}

await tg.sendMedia(toUser,
    InputMedia.document('file://app/input')
)

console.log('Send media ok')

