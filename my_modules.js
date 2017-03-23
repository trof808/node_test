module.exports.writeNumbers = function(res) {
    var counter = 0;

    for(var i = 0; i < 100; i++) {
        counter++;
        res.write(counter + '\n');
    }
};
