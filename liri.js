require("dotenv/config");
const keys = require("./keys.js");
const fs = require("fs");
const request = require("request");

//spotify variables
const Spotify = require("node-spotify-api");
const spotify = new Spotify(keys.spotify);

//twitter variables
const Twitter = require("Twitter");
const client = new Twitter(keys.twitter);
const params = {screen_name: keys.twitter.user_name};

//omdb apikey
const apiKey = keys.omdb.api_key;

//arguments
var arg1 = process.argv[2];
var arg2;


getArg2();


switch (arg1) {
       case "my-tweets":
        getTwitterInfo();
        break;
    case "spotify-this-song":
        getThisSong();
        break;
    case "movie-this":
        getThisMovie();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
}

function getArg2() {
    var argArr = [];
    for (var i = 3; i < process.argv.length; i++) {

        argArr.push(process.argv[i]);
    }
    var joinedArr = argArr.join(" ");
    arg2 = joinedArr;

}

function getTwitterInfo() {
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log("################################################");
                console.log(tweets[i].text);
                console.log(tweets[i].created_at);

            }
        }
        else {
            return console.log(error);
        }

        console.log(tweets.length);
    });
}

function getThisSong() {

    spotify.search({type: 'track', query: arg2}, function (error, data) {
        if (!error) {
            if (data.tracks.items.length != 0) {
                for (var i = 0; i < data.tracks.items.length; i++) {
                    console.log("################################################");
                    console.log("Artist name: " + data.tracks.items[i].album.artists[0].name);
                    console.log("Track name: " + data.tracks.items[i].name);
                    console.log("Album name; " + data.tracks.items[i].album.name);
                    if (data.tracks.items[i].preview_url != undefined) {
                        console.log("Preview URL: " + data.tracks.items[i].preview_url);
                    }
                }

            }
            else {
                spotify.search({type: 'track', query: "The Sign Ace of Base"}, function (error, data) {
                    console.log("################################################");
                    console.log("Artist name: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Album name; " + data.tracks.items[0].album.name);
                    console.log("Track name: " + data.tracks.items[0].name);
                    if (data.tracks.items[0].preview_url != undefined) {
                        console.log("Preview URL: " + data.tracks.items[0].preview_url);
                    }
                    console.log("################################################");
                });
            }

        }

        else{
                return console.log(error);
            }


    });
}

function getThisMovie() {
    request("http://www.omdbapi.com/?apikey=" + apiKey + "&t=" + arg2, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            var movie = JSON.parse(body);

            if (movie.Response != "False") {
                console.log("################################################");
                console.log("Title: " + movie.Title);
                console.log("Year: " + movie.Year);
                console.log("IMDB Rating: " + movie.Ratings[0].Value);
                console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
                console.log("Country: " + movie.Country);
                console.log("Language: " + movie.Language);
                console.log("Plot: " + movie.Plot);
                console.log("Actors: " + movie.Actors);
                console.log("################################################");

            }
            else {
                request("http://www.omdbapi.com/?apikey=" + apiKey + "&t=Mr.Nobody", function (error, response, body) {
                    var movie = JSON.parse(body);

                    if (movie.Response != "False") {
                        console.log("################################################");
                        console.log("Title: " + movie.Title);
                        console.log("Year: " + movie.Year);
                        console.log("IMDB Rating: " + movie.Ratings[0].Value);
                        console.log("Rotten Tomatoes Rating: " + movie.Ratings[1].Value);
                        console.log("Country: " + movie.Country);
                        console.log("Language: " + movie.Language);
                        console.log("Plot: " + movie.Plot);
                        console.log("Actors: " + movie.Actors);
                        console.log("################################################");
                    }

                });
            }
        }
        else {
            return console.log(error);
        }

    });
}

function doWhatItSays() {
    fs.readFile("./random.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        var dataArr = data.split(",");
        arg1 = dataArr[0];
        arg2 = dataArr[1];
        getThisSong();

    });
}

