import {Conversation, InputMedia, TelegramClient} from '@mtcute/node'

import * as env from './env.js'

const tg = new TelegramClient({
    apiId: env.API_ID,
    apiHash: env.API_HASH,
    storage: 'bot-data/session',
})


const user = await tg.start({botToken: env.BOT_TOKEN})
console.log('Logged in as', user.username)

await tg.sendMedia(Number.parseInt(env.TO_USER),
    InputMedia.document('file://app/input')
)

console.log('Send media ok')

