var express = require('express'),
    bodyParser = require('body-parser'),
    mailto = require('./mailto');
    app = express();

const ROOT = __dirname;

app.use('/assets', express.static('assets'));

app.set('views', './views');
app.set('view engine', 'jade');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.route('/')
    .get(function(req, res) {
        var options = {
            pageTitle: 'Home page',
            qr: req.query
        };
        // console.log(options.qr);
        res.render('index', options);
    })
    .post(urlencodedParser, function(req, res) {
        mailto.sendEmail({
            from : "reatrof@gmail.com",
            to : 'reatrof@gmail.com',
            subject : req.body.name,
            text : 'sending test text',
            html : '<b>' + req.body.email + '</b>'
        });
        console.log(req.body.name);
    });
app.get('/contact', function(req, res) {
    res.send('This is the contact page');
});
app.get('/profile/:id', function(req, res) {
    res.send('You requested to see the profile with id: ' + req.params.id);
});
app.listen(3000);
