var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function(req, res){
    //console.log('Hello World');
    res.send('Hello World');
})
app.listen(3000);
console.log('Server is running on port 3000');
