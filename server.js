// File that controls all the backend activity. Contains express and path modules.

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
});

app.listen(PORT, () => {
    console.log("App listening in Port: " + PORT);
});