require('dotenv').config();

var keys = require("./keys");

var fs = require("fs");
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");



var spotify = new spotify(keys.spotify);
var client = new twitter(keys.twitter);

function viewTweet (){

    var params = {screen_name: "madisonnb7", count:3};
    
    client.get("statuses/user_timeline", params, function(error, tweets, response) {
      if (error) {
        console.log(error);
      }
      for(var i = 0; i < tweets.length; i++){
        console.log("************");
        console.log(tweets[i].text);
        console.log("************");
      }
    
    });
    }
    

