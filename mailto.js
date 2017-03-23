var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'reatrof@gmail.com',
        pass: '585465077nikita'
    }
});

module.exports.sendEmail = function(options) {
    var options = options;
    transporter.sendMail(options, function(error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
    });
}

