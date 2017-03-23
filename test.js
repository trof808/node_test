var http = require('http');

var options = {
    host : 'localhost',
    port : '8000',
    path : '?/file=secondary',
    method : 'GET'
};

var processPublicTimeline = function(response) {

    // response.on('end', function() {
    //     console.log('request is over');
    // });
    console.log('request is over');
};

for (var i = 0; i < 2000; i++) {
    http.request(options, processPublicTimeline).end();
}
