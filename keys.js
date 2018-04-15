console.log('this is loaded');

exports.twitter = {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    user_name: process.env.USER_NAME
};

exports.spotify = {
    id: process.env.ecc630d855fa47d7b7716d5f5fe1ebc3,
    secret: process.env.c797092f10ce4cbab62a5198e599f91d
};
