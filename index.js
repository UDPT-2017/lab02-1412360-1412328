var express = require("express");
var app = express();
require('./config')(app);



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
