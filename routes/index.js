var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
	res.render("home");
});

router.get("/about-me", function(req, res){
	res.render("about-me");
});

router.get("/projects", function(req, res){
	res.render("projects");
});

router.get('*', function(req, res){
  res.redirect('/');
});

module.exports = router;