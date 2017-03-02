
  
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});



http.listen(9091, '172.31.28.188', function () {
  console.log('listening on *:9091 172.31.28.188');
});