# mybot

A small Slack bot for the Hack Club workspace. It answers slash commands, and two of them pull data from free public APIs.

## Commands

| Command | What it does |
| --- | --- |
| `/mybot-ping` | Replies with "Pong!" and the response time |
| `/mybot-help` | Lists all the commands |
| `/mybot-catfact` | Posts a random cat fact |
| `/mybot-joke` | Posts a random joke |

Every command starts with `mybot-` so it doesn't clash with other bots in the workspace.

## Built with

- Node.js
- [Slack Bolt for JavaScript](https://slack.dev/bolt-js/) in Socket Mode, so no public URL is needed
- axios for the API requests
- [Cat Fact API](https://catfact.ninja) and [Official Joke API](https://official-joke-api.appspot.com)

## Run it yourself

1. Create a Slack app with Socket Mode on, the `chat:write` and `commands` scopes, and the four slash commands above.
2. Clone this repo and install the packages:

   ```bash
   git clone https://github.com/YOUR_USERNAME/YOUR_REPO
   cd YOUR_REPO
   npm install
   ```

3. Create a `.env` file with your two tokens:

   ```
   SLACK_BOT_TOKEN=xoxb-...
   SLACK_APP_TOKEN=xapp-...
   ```

4. Start the bot:

   ```bash
   node index.js
   ```

   You should see `bot is running!`.

`.env` is in `.gitignore`, so the tokens never end up on GitHub.

## Hosting

The bot is meant to run 24/7 on Hack Club Nest as a systemd service, so it keeps going when my laptop is closed.

## Screenshot

Add a screenshot of the bot replying in #bot-spam here.

## License

MIT
