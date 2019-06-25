// Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.
var express = require("express");
var path = require("path");

var app = express();
//var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

app.listen(PORT, function(){
    console.log("app listening at : " + PORT);
})
//module.exports = app;