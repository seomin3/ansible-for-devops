var express = require('express'),
app = express.createServer();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(80);
console.log('express server stared successfully');