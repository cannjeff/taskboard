var app = require("express").createServer();

app.get('/', function(req, res) {
	res.send('hello world');
	res.end();
});


app.listen(1337);