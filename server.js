require('dotenv').config();
console.log('Database URL:', process.env.DATABASE_URL);
const express = require('express');
const Twitter = require('twitter');
const app = express();
const port = 3000;

const client = new Twitter({
  consumer_key: 'YOUR_CONSUMER_KEY',
  consumer_secret: 'YOUR_CONSUMER_SECRET',
  access_token_key: 'YOUR_ACCESS_TOKEN_KEY',
  access_token_secret: 'YOUR_ACCESS_TOKEN_SECRET'
});

app.get('/api/tweets/:username', (req, res) => {
  const username = req.params.username;

  client.get('statuses/user_timeline', {screen_name: username, count: 100}, (error, tweets, response) => {
    if (!error) {
      res.json(tweets);
    } else {
      res.status(500).send(error);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
