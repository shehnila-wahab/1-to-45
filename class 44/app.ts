function make_sandwich(...items: string[]){
    console.log(`making a sandwich with:${items.join(',')}.`);
}
make_sandwich("ham","cheese");
make_sandwich("turkey","tommato","lettuce");
make_sandwich("mayo","mustard","avovado")