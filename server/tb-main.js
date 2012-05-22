var http = require('http');

http.createServer(function (req, res) {
	var url = req.url.replace(/\//g, '');
	switch (url) {
		case 'testing':
			console.log('testing case');
			break;
		case '':
			console.log('');
			break;
		default:
			console.log('you suck! - ' + url);
			break;
	}

	res.writeHead(200, { 'Content-Type': 'text/plain'});
	res.end('{"message": "hello"}');
}).listen(1337);

console.log('Well hello there fella');