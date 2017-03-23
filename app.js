var http = require("http");
var fs = require('fs');


// var myWriteStream = fs.createWriteStream(__dirname + '/index.txt');

// myReadStream.on('data', function(chunk) {
//     console.log('new chunk recieved:');
//     myWriteStream.write(chunk);
// });



var server = http.createServer(function(req, res) {

    console.log('request was made by: ' + req.url);

    var obj = {
        name : 'Nikita',
        country : 'Russia',
        age: '21'
    };

    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-type' : 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url == '/sendjson'){
        res.writeHead(200, {'Content-type' : 'application/json'});
        res.end(JSON.stringify(obj));
    } else {
        res.writeHead(404, {'Content-type' : 'application/json'});
        res.end('page not found');
    }
});

server.listen(8000, 'localhost', function() {console.log('server is running');});
