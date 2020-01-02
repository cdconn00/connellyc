var express        = require("express"),
	app            = express(),
	session        = require("express-session"),
	bodyParser     = require("body-parser"),
	methodOverride = require("method-override");

var routes         = require("./routes/index");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.use(routes);

app.listen(process.env.PORT);