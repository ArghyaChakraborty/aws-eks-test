const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS,DELETE,PUT");
    next();
});

app.get('/', (req, res) => {
    let hello_str = "anonymous";
    if(req.query.name != null) {
        hello_str = req.query.name;
    }
    res.set("Content-Type", "application/json");
    const msg = {"message": "Hello "+hello_str+" !!!"};
    console.log(res);
    console.log(msg);
    res.send(msg);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});

process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" );
    // some other closing procedures go here
    process.exit(1);
});

module.exports = app;