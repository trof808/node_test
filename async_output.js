var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    util = require('util'),
    querystring = require('querystring'),
    myModule = require('./my_modules'),
    events = require('events');

var Person = function(name) {
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var james = new Person('James');
var tom = new Person('Tom');
var nik = new Person('Nikita');

var people = [james, tom, nik];

people.forEach(function(person) {
    person.on('speak', function(res, mssg) {
        res.write(person.name + ' said: ' + mssg);
    });
});

http.createServer(function(req, res) {

    var query = url.parse(req.url).query;
    console.log(query);
    var app = querystring.parse(query).file + '.txt';

    res.writeHead(200, {'Content-type' : 'text/plain'});
    // myModule.writeNumbers(res);
    james.emit('speak', res, 'Hello, I am James\n');
    tom.emit('speak', res, 'Hello, I am Tom\n');
    nik.emit('speak', res, 'Hello, I am Nikita\n');
    setTimeout(function() {
        console.log('opening ' + app);
        fs.readFile(app, 'utf8', function(err, data) {
            if(err) {
                res.write('file could not be found');
            } else {
                res.write(data);
            }
            res.end();
        });
    }, 2000);

}).listen(8000, 'localhost', function() {console.log('server is running port 8000')});
