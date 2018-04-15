require("dotenv/config");
const keys = require("./keys.js");
const fs = require("fs");

//spotify variables
const Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

//twitter variables
const Twitter = require("Twitter");
const client = new Twitter(keys.twitter);
const params = {screen_name: keys.twitter.user_name};

//arguments
var arg1  = process.argv[2];
var arg2 = process.argv[3]; // *** take multiple array elements ***

switch (arg1) {
    case "my-tweets":
        getTwitterInfo();
        break;
    case "spotify-this-song":
         getThisSong();
        break;
}

function getTwitterInfo() {
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets[0].text);
        }
    });
}

function getThisSong() {

    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data.tracks.items[0].album.artists[0].name);
    });
}