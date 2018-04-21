# LIRI.JS

Liri is a text based application that uses the Spotify, Twitter, and OMDb APIs to search
songs, movies, or view your last 20 tweets. Required Files are listed below

## Required Files
You will need to include a .env file within the root folder for liri.  It will include
the following information.
```
#Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

#Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-twitter-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
TWITTER_USER_NAME=your-twitter-handle

#OMDb API key
API_KEY=your-omdb-api-key
```

## Using Liri

To use Liri you will need to start by installing the npm packages.

```npm install```

After the packages are installed you can call on 4 different actions by starting each
command with: 

```node liri.js```

followed by:

```my-tweets``` (returns up to 20 most recent tweets)

```movie-this "movie name" ``` (returns move information)

```spotify-this-song "song name" ```(returns song information)

```do-what-it-says ```(performs the command listed in random.txt)


