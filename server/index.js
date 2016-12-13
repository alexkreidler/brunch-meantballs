const express = require('express');
const mongo = require('mongodb');
const assert = require('assert');

var app = express();
var port = process.env.PORT || 3000

var MongoClient = mongo.MongoClient;
MongoClient.connect('mongodb://localhost:27017', function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.close();
});


app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
