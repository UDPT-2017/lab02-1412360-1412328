var pg = require('pg');
var methods = {};

var connectionString = "postgres://postgres:123456@localhost:5432/lab2";
var check;

var listusers = {
  findAll: function(callback) {
    var client = new pg.Client(connectionString);

    client.connect(function(err) {
      if(err) throw err;
      client.query("select email from users", function(err, result){
        callback(err, result.rows);
      });
    });
  }
}

module.exports = listusers;
