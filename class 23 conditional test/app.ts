let car : string = 'subaru';
// Test 1: Equality Comparison (True)
console.log("Is car == 'subaru? I predict True.'");
console.log(car == 'subaru'); //True


// Test 2: strict Equality Comparison (True)
console.log("Is car === 'subaru? I predict True.'");
console.log(car === 'subaru'); //True



// Test 3: InEquality Comparison (false)
console.log("Is car != 'subaru? I predict false.'");
console.log(car != 'subaru'); //false



// Test 4: strict inEquality Comparison (false)
console.log("Is car !== 'subaru? I predict True.'");
console.log(car !== 'subaru'); //false


// Test 5: lesss than Comparison (false)
console.log("Is car < 'subaru? I predict false'");
console.log(car < 'subaru'); //false(lexicograpic comparison)

// Test 6: Greather than Comparison (false)
console.log("Is car > 'subaru? I predict false.'");
console.log(car > 'subaru'); //false(lexicograpic comparison)


// Test 7: less than or equal Comparison (true)
console.log("Is car <= 'subaru? I predict true.'");
console.log(car <= 'subaru'); //true

// Test 8: Greather than or equal Comparison (true)
console.log("Is car >= 'subaru? I predict true.'");
console.log(car >= 'subaru'); //true

// Test 9: checking truthiness (true)
console.log("Is car > 'subaru? I predict true.'");
console.log(car); //true(non empty string is truely)