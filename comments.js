//create web server
var http = require('http');
//create file system object
var fs = require('fs');
//create url object
var url = require('url');

//create web server
http.createServer(function(req, res) {
    //create url object
    var q = url.parse(req.url, true);
    //create filename object
    var filename = "." + q.pathname;
    //read file
    fs.readFile(filename, function(err, data) {
        if (err) {
            //if error, display error
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        //if no error, display data
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);
