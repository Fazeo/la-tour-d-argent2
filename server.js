/* EXPRESS */
const express = require('express');
const app = express();
/* CREATION DU SERVER */
const server = require('http').createServer(app);
/* variable globales */
var port = 1337;

/* ROAD TO ASSETS DIRECTORY */
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use('/fonts', express.static(__dirname + '/public/fonts'));

/* road for start page */
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/heritage', function (req, res) {
    res.sendFile(__dirname + '/views/heritage.html');
});

app.get('/carte', function (req, res) {
    res.sendFile(__dirname + '/views/carte.html');
});

app.get('/reservation', function (req, res) {
    res.sendFile(__dirname + '/views/reservation.html');
});

app.get('/un_gout_nouveau', function (req, res) {
    res.sendFile(__dirname + '/views/ungoutnouveau.html');
});

server.listen(port);
console.log("application live on port " + port);
