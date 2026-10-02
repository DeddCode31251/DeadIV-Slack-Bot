require("dotenv").config();
const { App } = require("@slack/bolt");
const axios = require("axios");

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

// 1. Ping
app.command("/mybot-ping", async ({ ack, respond }) => {
  const start = Date.now();
  await ack();
  await respond({ text: `Pong! Latency: ${Date.now() - start}ms` });
});

// 2. Help
app.command("/mybot-help", async ({ ack, respond }) => {
  await ack();
  await respond({
    text:
`*Available commands:*
/mybot-ping - Check bot latency
/mybot-help - Show this list
/mybot-catfact - Get a random cat fact
/mybot-joke - Get a random joke`,
  });
});

// 3. Cat fact (API)
app.command("/mybot-catfact", async ({ ack, respond }) => {
  await ack();
  try {
    const { data } = await axios.get("https://catfact.ninja/fact");
    await respond({ response_type: "in_channel", text: `Cat Fact:\n${data.fact}` });
  } catch (err) {
    console.error(err);
    await respond({ text: "Failed to fetch a cat fact." });
  }
});

// 4. Joke (API)
app.command("/mybot-joke", async ({ ack, respond }) => {
  await ack();
  try {
    const { data } = await axios.get("https://official-joke-api.appspot.com/random_joke");
    await respond({
      response_type: "in_channel",
      text: `${data.setup}\n\n${data.punchline}`,
    });
  } catch (err) {
    console.error(err);
    await respond({ text: "Failed to fetch a joke." });
  }
});

(async () => {
  await app.start();
  console.log("bot is running!");
})();
