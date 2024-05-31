var magicions = ["DON", "Rmeez", "chris"];
function make_great(magicions) {
    for (var i = 0; i < magicions.length; i++) {
        magicions[i] = magicions[i] + "the great";
    }
}
make_great(magicions); //modifies the origional arrey
// show_magicions(magicions); // show modified names 
console.log(magicions);
