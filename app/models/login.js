var pg = require('pg');
var methods = {};

var connectionString = "postgres://postgres:123456@localhost:5432/lab2";
var check;

methods.login = function(email, password) {

    var client = new pg.Client(connectionString);
    client.connect(function(err) {
        if (err) throw err;
        var query = client.query("select password from users where email = '" + email + "'");

        query.on('row', function(row) {
            if (password === row.password) {
                check = 1;

            } else {
                check = 0;
            }
        });
        // query.on('end', function() {
        //     client.end();
        // });
    });

    console.log(check);
     //return check;
    if(check == 1)
    {

      return 1;
    }
    else {
      {
        return 0;
      }
    }
}
exports.data = methods;
