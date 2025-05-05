# Packed file uploader for Telegram Bot Api

## Usage

Just type it in anywhere:
```bash
cat /path/to/file | docker run -i --rm lionzxy/tgbot_upload -e BOT_TOKEN='<api_token>' TO_USER='<username_or_userid>'
```
Where:
- `/path/to/file` - is your file
- `<api_token>` - bot api token
- `<username_or_userid>` - Username or user, for example: `lionzxy`, `1235433892`

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