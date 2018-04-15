require("dotenv/config");
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var Twitter = require("Twitter");
// var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var params = {screen_name: keys.twitter.user_name};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets);
    }
});