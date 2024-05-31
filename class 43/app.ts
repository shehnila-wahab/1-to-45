let magicions: string[] = ["david","chris","Ainak wala"];
function make_great(magicions:string[]): string[] {
    let greatmagcions =[];
    magicions.forEach(magicion =>{
        greatmagcions.push(`${magicion} the great`);
    });
    return greatmagcions;
}
// let greatmagcions = make_great(magicions.slice());
// console.log("origional arrey");
// show_magicions(magicions);
// console.log("great magicions")
// show magicions(greatmagcions);
