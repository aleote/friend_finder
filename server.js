
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var buddiesData = require("./FriendFinder/app/data/friends.js");


// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//fill in the requires
require('./FriendFinder/app/routes/apiRoutes.js')(app);
require('./FriendFinder/app/routes/htmlRoutes.js')(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

