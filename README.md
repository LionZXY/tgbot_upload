# Packed file uploader for Telegram Bot Api

## Usage

Just type it in anywhere:
```bash
cat /path/to/file | docker run -i --rm lionzxy/tgbot_upload -e BOT_TOKEN='<api_token>' TO_USER='<userid>'
```
Where:
- `/path/to/file` - is your file
- `<api_token>` - bot api token
- `<userid>` - Chat id, for example: `1235433892`. Can be got by open `https://api.telegram.org/bot<api_token>/getUpdates` in browser

## Useful lines

7z max compression:
```bash
7z a -r -m0=lzma2 -mx tmp.7z /path/to/folder
```

## Development

```bash
pnpm install --frozen-lockfile
cp .env.example .env 
# edit .env
pnpm start
```