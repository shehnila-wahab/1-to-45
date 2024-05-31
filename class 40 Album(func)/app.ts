function myAlbum(artistName:string,albumTittle:string){
    return {artistName , albumTittle}
}
let ALbum1 = myAlbum("ALi","Rang_e_MOhabbat")
let ALbum2 = myAlbum("usama","Maheen's")
let ALbum3 = myAlbum("Shehnila","Hamari adhuri kahani")

console.log(ALbum1);
console.log(ALbum2);
console.log(ALbum3);

// number of tracks
function myAlbum2(artistName:string,albumTittle:string, numberOfTrack?:number){
return{artistName,albumTittle,numberOfTrack}
}
let ALbum4 = myAlbum("asim","ABCD");
let ALbum5 = myAlbum("Asif","ROOH");
let ALbum6 = myAlbum("Amir","Roshan andheera");
console.log(ALbum4)
console.log(ALbum5)
console.log(ALbum6)
