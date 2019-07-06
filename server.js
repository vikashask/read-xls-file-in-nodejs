let express = require('express');
let app = express();
let port = 8080;
let bodyParser = require('body-parser');
let morgan = require('morgan');

//parse application/json and look for raw text                                        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/json'
}));
//use morgan to log at command line
app.use(morgan('combined')); //'combined' outputs the Apache style LOGs

// route
const xlsRoute = require('./routes/xlsRoute');

app.get("/", (req, res) => res.json({
    message: "Welcome to our Demo convert xls to json"
}));

app.get("/getXls",xlsRoute.getXls);


app.listen(port);
console.log("Listening on port " + port);
