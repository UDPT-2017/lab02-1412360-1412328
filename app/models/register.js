var pg = require('pg');

var methods = {};
var connectionString = "postgres://postgres:123456@localhost:5432/lab2";

methods.register = function(name, email, phone, password, callback) {
    var client = new pg.Client(connectionString);
    client.connect(function(err) {
        if (err) throw err;
        var query = client.query("insert into users(name, email, phone, password) values('" + name + "','" + email + "','" + phone + "','" + password + "') ", function(err, result) {
            callback(err, result);
        });

        query.on('end', function() {
            client.end();
        });
    });
}

exports.data = methods;
