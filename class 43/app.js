var magicions = ["david", "chris", "Ainak wala"];
function make_great(magicions) {
    var greatmagcions = [];
    magicions.forEach(function (magicion) {
        greatmagcions.push("".concat(magicion, " the great"));
    });
    return greatmagcions;
}
var greatmagcions = make_great(magicions.slice());
console.log("origional arrey");
show_magicions(magicions);
console.log("great magicions");
show;
magicions(greatmagcions);
