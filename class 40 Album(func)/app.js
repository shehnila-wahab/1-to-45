function myAlbum(artistName, albumTittle) {
    return { artistName: artistName, albumTittle: albumTittle };
}
var ALbum1 = myAlbum("ALi", "Rang_e_MOhabbat");
var ALbum2 = myAlbum("usama", "Maheen's");
var ALbum3 = myAlbum("Shehnila", "Hamari adhuri kahani");
console.log(ALbum1);
console.log(ALbum2);
console.log(ALbum3);
// number of tracks
function myAlbum2(artistName, albumTittle, numberOfTrack) {
    return { artistName: artistName, albumTittle: albumTittle, numberOfTrack: numberOfTrack };
}
var ALbum4 = myAlbum("asim", "ABCD");
var ALbum5 = myAlbum("Asif", "ROOH");
var ALbum6 = myAlbum("Amir", "Roshan andheera");
console.log(ALbum4);
console.log(ALbum5);
console.log(ALbum6);
