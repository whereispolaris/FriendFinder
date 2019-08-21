// This file should have two routes:

// A GET route with the url /api/friends.This will be used to display a JSON of all possible friends.
// A POST routes /api/friends.This will be used to handle incoming survey results.This route will also be used to handle the compatibility logic.


// Data to display in API routes
var friendData = require('../data/friend.js');


module.exports = function (app) {
    app.get('/api/friends', function (req, res) {
        res.json(friendData);
    });

    app.post('/api/friends', function (req, res) {
        friendData.push(req.body);
        res.json(true);

    });
};