// DEPENDENCIES
// =====================================
// Read and set environment variables
require("dotenv").config();

// Import the Twitter NPM package.
var Twitter = require("twitter");

// Import the node-spotify-api NPM package.
var Spotify = require("node-spotify-api");

// Import the API keys
var keys = require("./keys");

// Import the request npm package.
var request = require("request");

// Import the FS package for read/write.
var fs = require("fs");

// Initialize the spotify API client using our client id and secret
var spotify = new Spotify(keys.spotify);
for (i = 3; i < process.argv.length; i++)
    search += process.argv[i] + "+"


// var spotify = new spotify(keys.spotify);
var client = new Twitter(keys.twitter);

function viewTweet() {
    var client = new Twitter(keys.twitter);

    var params = {
        screen_name: "Madisonnb7", count: 5
    };
    client.get("statuses/user_timeline", params, function (error, tweets, response) {
        if (!error) {
            for (var i = 0; i < tweets.length; i++) {
                console.log(tweets[i].created_at);
                console.log("");
                console.log(tweets[i].text);
            }
        }
    });
}
function movieThis(){

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  
  request(queryURL, function(error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log("Release Date: "  + JSON.parse(body).Released);

         
  }
});
    

}



// Function for determining which command is executed
var pick = function(caseData, functionData) {
    switch (caseData) {
        case "my-tweets":
            viewTweet();
            break;
        case "spotify-this-song":
            getMeSpotify(functionData);
            break;
        case "movie-this":
            getMovie(functionData);
            break;
        case "do-what-it-says":
            doWhatItSays();
            break;
        default:
            console.log("LIRI doesn't know that");
    }
};


// Function which takes in command line arguments and executes correct function accordigly
var run = function(argOne, argTwo) {
    pick(argOne, argTwo);
};

// MAIN PROCESS
// =====================================
run(process.argv[2], process.argv[3]);

