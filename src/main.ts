import {InputMedia, TelegramClient} from '@mtcute/node'
import minimist from 'minimist'

import * as env from './env.js'

const tg = new TelegramClient({
    apiId: env.API_ID,
    apiHash: env.API_HASH,
    storage: 'bot-data/session'
})

const argv = minimist(process.argv.slice(2));
console.log('Input arg:', argv)
const filePath = argv['file'] ?? env.DEFAULT_FILE_PATH
console.log('Receive path to file:', filePath);

const user = await tg.start({botToken: env.BOT_TOKEN})
console.log('Logged in as', user.username)

await tg.sendMedia(Number.parseInt(env.TO_USER),
    InputMedia.document('file://' + filePath)
)

console.log('Send media ok')

await tg.close()