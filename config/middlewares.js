var express = require("express");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();


module.exports = function(app) {
  app.use(express.static('public'));
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use('/components', express.static('bower_components'));
}
