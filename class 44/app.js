function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("making a sandwich with:".concat(items.join(','), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "tommato", "lettuce");
make_sandwich("mayo", "mustard", "avovado");
