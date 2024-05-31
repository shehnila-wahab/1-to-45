function Describe_city(nameofcity, country) {
    if (country === void 0) { country = "pakistan"; }
    return "".concat(nameofcity, " is in ").concat(country);
}
var city1 = Describe_city("karachi", "china");
var city2 = Describe_city("larkana", "america");
var city3 = Describe_city("pakistan,hyderabad");
var city4 = Describe_city("dubai", "UAE");
console.log(city1);
console.log(city2);
console.log(city3);
console.log(city4);
