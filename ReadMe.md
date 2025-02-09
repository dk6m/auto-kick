# Discord AutoKick Bot

This is a simple Discord bot that automatically kicks new members upon joining the server and sends them a direct message.

## Requirements
- Node.js (v16 or later)
- `discord.js` library (install with `npm install discord.js`)
- A Discord bot token (from the [Discord Developer Portal](https://discord.com/developers/applications))

## Installation & Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/dk6m/auto-kick.git
   cd auto-kick
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your bot token:
   ```env
   TOKEN=your-bot-token-here
   ```
4. Run the bot:
   ```sh
   node index.js
   ```

## How It Works
- When a new member joins the server, the bot automatically sends them a message: "You have been kicked from the server."
- The bot then kicks the user from the server.

## Notes
- Ensure the bot has `KICK_MEMBERS` permission in the server.
- The bot should have `GUILD_MEMBERS` and `DIRECT_MESSAGES` intents enabled.

## Discord 
[![Discord Presence](https://lanyard.cnrad.dev/api/246383236744347648)](https://discord.com/users/246383236744347648)

