# Fare Website

Dark, minimal, premium Discord bot website.

## Deploy
Upload this folder to a Vercel project or connect it to GitHub.

### Live statistics
Add this Vercel environment variable:

`DISCORD_BOT_TOKEN=your_bot_token`

The `/api/stats` endpoint reads the bot's guild list from Discord and calculates server/user counts. Keep the token server-side; never put it in browser JavaScript.

## Links
- Support: https://discord.gg/46Vn9pdtPF
- Invite: https://discord.com/oauth2/authorize?client_id=1514506916993306744&permissions=8&integration_type=0&scope=applications.commands+bot
- Existing site: https://farebot.vercel.app/

## Notes
- The included `assets/logo.svg` is a clean temporary Fare F mark. Replace it with the actual Fare bot icon when available.
- GitHub footer is currently a placeholder because no repository URL was provided.
- Dashboard is intentionally a foundation: live public stats work after `DISCORD_BOT_TOKEN` is configured; server management can be added later.
