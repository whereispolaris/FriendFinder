// This file should have two routes:

// A GET Route to / survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.

// Require path
var path = require('path');

module.exports = function (app) {
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname + '../../public/survey.html'));
    });

    // homepage or any other page
    app.use(function (req, res) {
        res.sendFile(path.join(__dirname + '../../public/home.html'));
    });

}
