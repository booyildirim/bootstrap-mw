var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');

var port = 8080;

// to get our request parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// mw routes
var api = express.Router();


api.get("/health", function(req, res) {
    var resp = {
      success: true,
      message: "I am healty."
    }
    res.json(resp);
});


api.post('/data', function(req, res) {
    var dataToPost = req.body.data;
    var token = req.body.token;

    var resp = {
      success: true,
      message: "Done.",
      data: dataToPost
    }

    res.json(resp);
});


// all mw routes under /api/*
app.use('/api', api);

// Start the server
app.listen(port);
console.log('Server started @' + port);
