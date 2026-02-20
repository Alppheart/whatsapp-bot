const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.post("/webhook", (req, res) => {
  console.log("Incoming message:", req.body);
  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running");
});
