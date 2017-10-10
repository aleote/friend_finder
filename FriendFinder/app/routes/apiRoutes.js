// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var  buddies = require("../data/friends.js");
var path = require("path");
var express = require("express");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/buddies", function(req, res) {
    res.json(buddies);

  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/buddies", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
 
 // FILL THIS IN! 
var exerciseMatch = {
	name: "",
	image: "",
	matchDifference: 1000
};

var userData = req.body;
var userName = userData.name;
var userImage = userData.image;
var userScores = userData.scores;
var totalDifference = 0;

for (var i = 0; i < [userData].length; i++) {
	console.log(userData[i].name);
	totalDifference = 0; 

	console.log(userData);


for (var j = 0; j < 10; j++) {
	totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(buddies[i].scores[j]));
	if (totalDifference <= exerciseMatch.friendDifference){

		exerciseMatch.name = buddies[i].name;
		exerciseMatch.photo = buddies[i].photo;
		exerciseMatch.matchDifference = totalDifference;
	}
}
}

buddiesData.push(userData);

res.json(exerciseMatch);

  });


};
