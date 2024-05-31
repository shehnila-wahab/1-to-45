var car = "subaru";
var age = 25;
var number = [1, 2, 3, 4];
// string test
// test 1: equality (true)
console.log("Is car == 'subaru'? I predict true.");
console.log(car == 'subaru'); //true (case-insenitive)
// test 2: strict equality (false)
console.log("Is car == 'subaru'? I predict false.");
console.log(car == 'subaru'); //false (case-insenitive)
// test 3: Inequality (true)
console.log("Is car != 'toyota'? I predict true.");
console.log(car != 'subaru'); //true
// test 4: equality (false)
console.log("Is car !== 'subaru'? I predict true.");
console.log(car !== 'subaru'); //false (case-insenitive)
//lowercase function test
// test 5: lowercase convertion (true)
console.log("Is car.toLowercase()== 'subaru'? i predict true.");
console.log(car.toLowerCase() == 'subaru'); //true (converted to lowercase)
// test 6: lowercase convertion (false)
console.log("Is car ===car.toLowercase()== 'subaru'? i predict true.");
console.log(car === car.toLowerCase()); //False (orgional value remains uppercase)
