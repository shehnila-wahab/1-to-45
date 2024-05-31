var magicians = ["Brad", "Rmeez", "aynak wala"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicians);
//  QUESTION 42
var magiciaans = ["DON", "Rmeez", "Chris"];
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + "the Great";
    }
}
make_great(magicians);
