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

	res.writeHead(200, { 'Content-Type': 'application/json'});
	var array = [];
	array.push({'ticketNumber':'100', 'title':'Testing something cool', 'estimate':'1', 'status':'toDo', 'desc':'This is a description of a ticket, it can be long or short!'});
	array.push({'ticketNumber':'101', 'title':'Make everything better', 'estimate':'2', 'status':'toDo', 'desc':'This is a description of a ticket, it can be long or short!'});
	[{'ticketNumber':'100', 'title':'Testing something cool', 'estimate':'1', 'status':'toDo', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'101', 'title':'Make everything better', 'estimate':'2', 'status':'toDo', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'102', 'title':'Help?', 'estimate':'1', 'status':'inProgress', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'103', 'title':'This ticket is useless', 'estimate':'13', 'status':'inProgress', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'104', 'title':'Test the flux capacitor', 'estimate':'1', 'status':'inProgress', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'105', 'title':'Build a time machine', 'estimate':'5', 'status':'inProgress', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'106', 'title':'Profit?', 'estimate':'1', 'status':'done', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'107', 'title':'Be lazy', 'estimate':'2', 'status':'done', 'desc':'This is a description of a ticket, it can be long or short!'},
			 {'ticketNumber':'108', 'title':'Literally do nothing', 'estimate':'1', 'status':'done', 'desc':'This is a description of a ticket, it can be long or short!'}]
	res.write(array);
	res.end();
}).listen(1337);

console.log('Well hello there fella');