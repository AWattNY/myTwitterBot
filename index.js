var Twit = require('twit');

var bot = new Twit({
  consumerKey: process.env.ITMT_CONSUMER_KEY,
  consumerSecret: process.env.ITMT_CONSUMER_SECRET,
  accessToken: process.env.ITMT_ACCESS_TOKEN,
  accessTokenSecret: process.env.ITMT_ACCESS_TOKEN_SECRET,
  timeoutMS: 60 * 1000
});