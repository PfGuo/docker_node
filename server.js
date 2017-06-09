var express = require('express');
var app = express();
var fs = require('fs');

var user = {
   "user4" : {
      "name" : "mohit",
      "password" : "password4",
      "profession" : "teacher",
      "id": 4
   }
}

app.get('/listUser', function(req, res) {
    fs.readFile(__dirname + '/user.json', 'utf8', function(err, data) {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
            res.end(data);
        }
    });
});

app.get('/addUser', function(req, res) {
    fs.readFile(__dirname + '/user.json', 'utf8', function(err, data) {
        if(err) {
            console.log(err);
        } else {
            data = JSON.parse(data);
            data['user4'] = user['user4'];
            console.log("--------------------------");
            console.log(data);
            console.log("--------------------------");
            res.end(JSON.stringify(data));
        }
    });
});

app.get('/queryUser/:id', function(req, res) {
    fs.readFile(__dirname + '/user.json', 'utf8', function(err, data) {
        data = JSON.parse(data);
        var user = data['user'+req.params.id]
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

app.get('/deleteUser/:id', function(req, res) {
    fs.readFile(__dirname + '/user.json', 'utf8', function(err, data) {
        data = JSON.parse(data);
        delete data['user' + req.params.id];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(8888, function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log("http://%s:%s", host, port);
});