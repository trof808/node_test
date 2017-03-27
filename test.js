
function getDate() {
    var date = new Date();
    return date.toLocaleTimeString();
}


var dateInterval = setInterval(function() {
    console.log(getDate());
}, 1000);

