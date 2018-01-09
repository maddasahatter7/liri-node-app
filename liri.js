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
var getMovie = function movieThis(movieName){
    if (movieName === undefined){
        movieName = "Free Willy";
    } 

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
  
  request(queryUrl, function(error, response, body) {

        if (!error && response.statusCode === 200) {
          
            console.log("Movie Name: " + JSON.parse(body).Title);
            console.log("Release Date: " + JSON.parse(body).Released);
            console.log("Rated: " + JSON.parse(body).Rated);
            console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).tomatoRating);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);

         
  }
});
    

}

var getArtist = function(artist){
    return artist.name;
};

var getSpotify = function(songName){
    if (songName === undefined){
        songName = "vibin out with (((o)))";
    }
    spotify.search(
        {
        type: "track",
        query: songName  
    },
    function(err,data){
        if (err){
            console.log("There's a damn error: " + err);
            return;
        }
        var songs = data.tracks.items;
        for (var i = 0; i < songs.length; i++){
            console.log(i);
            console.log("artist(s): " + songs[i].artists.map(getArtist));
            console.log("song name: " + songs[i].name);
            console.log("Preview: " + songs[i].preview_url);
        }
    }
)
}



// Function for determining which command is executed
var pick = function(caseData, functionData) {
    switch (caseData) {
        case "my-tweets":
            viewTweet();
            break;
        case "spotify-this-song":
            getSpotify(functionData);
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

