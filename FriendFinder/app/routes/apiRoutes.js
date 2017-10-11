// A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
// A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

var buddies = require("../data/friends.js");
var path = require("path");



// ===============================================================================
// ROUTING
// ===============================================================================

var totalDifference =0;

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
var newBuddy = {
	name: req.body.name,
	image: req.body.photo,
	scores: req.body.scores,
	
};

var userData = req.body;
var userName = userData.name;
var userImage = userData.image;
var userScores = userData.scores;
var totalDifference = 0;

buddies.push(newBuddy);

var newArr = []; //store all differences
var newMatch;
var previousScore = 0;

for (var i = 0; i < buddies.length; i++) {  //loop through outer array (buddies)
	var totalDifference = 0;

	for (var j = 0; j < buddies[i].scores.length; j++) {	//loop through inner array (scores)

		var eachDifference = Math.abs(parseInt(buddies[buddies.length - 1].scores[j] - parseInt(buddies[i].scores[j])));
		totalDifference += eachDifference;
		
	}

	newArr.push(totalDifference);

	if(totalDifference >= previousScore){
		newMatch = buddies[i];
		previousScore = totalDifference;
		console.log('New Match: ' + newMatch.name)
	}
}


res.json(newMatch);

  });


};
