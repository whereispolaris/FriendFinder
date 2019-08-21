// File that controls all the backend activity. Contains express and path modules.
const bodyParser = require("body-parser");
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

// parse application/x-www-form-url-encoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

app.listen(PORT, () => {
    console.log("App listening in Port: " + PORT);
});