var net = require('net');

const HOST = 'localhost';
const PORT = '8080';

var server = net.createServer(function(con) {
    con.on('data', function(data) {
        console.log(data + ' от ' + con.remoteAddress + ' ' + con.remotePort);
    });
}).listen(PORT, HOST, function() {
    console.log('listening on port 6969');
});

// var client = new net.Socket();
//
// client.setEncoding('utf8');
//
// //установка соединения с сервером
// client.connect(PORT, HOST, function() {
//     console.log('connected to port ' + PORT);
// });
//
// // //ввод в терминале
// // process.stdin.resume();
// //
// // //передача данных
// // process.stdin.on('data', function(data) {
// //     client.write(data);
// // });
//
// //получение данных
// client.on('data', function(data) {
//     console.log(data);
// });
//
// client.on('close', function() {
//     console.log('connection is closed');
// });
