var Twit = require('twit');

var bot = new Twit({
  consumer_key: process.env.ITMT_CONSUMER_KEY,
  consumer_secret: process.env.ITMT_CONSUMER_SECRET,
  access_token: process.env.ITMT_ACCESS_TOKEN,
  access_token_secret: process.env.ITMT_ACCESS_TOKEN_SECRET,
  timeoutMS: 60 * 1000
});

// To send a Tweet

bot.post('statuses/update', { status: 'testing tweet bot!'}, function(err, data, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(data.text + ' was tweeted.');
  }
});

// To Retrive list of followers

bot.get('followers/list', {screen_name: 'InTechMansTerms'}, function(err, data, response) {
  if (err) {
    console.log(err);  	
  } else {
    data.users.forEach(function(user) {
      console.log(user.screen_name);  
    });
  }
});



//To Follow (check rules as there are limitations to bot follow) 

bot.post('friendships/create', {screen_name: 'InTechMansTerms'}, function(err, data, response) {
  if (err) {
    console.log(err);  	
  } else {
    console.log(data);
  }
});



// looking up people we follow can you list instead of ids for more details

bot.get('friendships/ids', {screen_name: 'InTechMansTerms'}, function(err, data, response) {
  if (err) {
    console.log(err);  	
  } else {
    console.log(data);
  }
});

// to find out relationship with someScreenName

bot.get('friendships/lookup', {screen_name: 'someScreenName'}, function(err, data, response) {
  if (err) {
    console.log(err);  	
  } else {
    console.log(data);
  }
});

// To send direct message to someScreenName

bot.post('direct_messages/new', {screen_name: 'someScreenName', text: 'Hello There'}, function(err, data, response) {
  if (err) {
    console.log(err);  	
  } else {
    console.log(data);
  }
});

// to get last 5 tweets from time line 
const getTimeLine = function() {

  bot.get('statuses/home_timeline', {count: 5}, function(err, data, response) {
    if (err) {
      console.log(err);  	
    } else {
      data.forEach(function(d) {
        console.log(d.text);
        console.log(d.user.screen_name);
        console.log(d.id_str);
        console.log('\n');
      });
    }
  });
};

// to retweet / to unretweet change to statuses/unretweet/:id  
bot.post('statuses/retweet/:id', {id: 'put some tweet id here'}, function(err, data, response) {
  if (err) {
    console.log(err);  	
  } else {
    console.log(data.text + 'was retweeted');
  }
});

// to like / use destroy to unlike

bot.post('favorites/create', {id: 'put some tweet id here'}, function(err, data, response) {
  if (err) {
    console.log(err);  	
  } else {
    console.log(data.text + 'was liked');
  }
});

// to respond to a tweet

bot.post('statuses/update', {status: '@somescreenname Yay!', in_reply_to_status_id: 'put some tweet id here'}, function(err, data, response) {
  if (err) {
    console.log(err);  	
  } else {
    console.log(data);
  }
});

// to delete a tweet 

bot.post('statuses/destroy/:id', {id: 'put some tweet id here'}, function(err, data, response) {
  if (err) {
    console.log(err);  	
  } else {
    console.log(data.text + ' was deleted.');
  }
});













