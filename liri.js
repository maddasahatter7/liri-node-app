// require("dotenv").config();

var keys = require("./keys");

var fs = require("fs");
var twitter = require("twitter");
// var spotify = require("node-spotify-api");
var request = require("request");

var user = process.argv[2];

var search = "";

for (i = 3; i < process.argv.length; i++)
    search += process.argv[i] + "+"


// var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

function viewTweet() {

    var params = { screen_name: "Madisonnb7", count: 5 };

    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (!error) {
            for (i = 0; i < tweets.length; i++)

                console.log(tweets[i].text);

        }

    });
}


