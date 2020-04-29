const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer((req,res)=>{
	var q = url.parse(req.url,true);
	var filename = '.'+q.pathname;
	fs.readFile(filename,(err,data)=>{
		if(err){
			res.writeHead(404,{'content-type':'text/html'});
			return res.end('404 not found!')
		}
		res.write(data);
		res.end();
	})
}).listen(3000);