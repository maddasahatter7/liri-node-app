require("dotenv").config();

var keys = require("./keys");

var fs = require("fs");
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);