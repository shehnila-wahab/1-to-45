var arr = ["shehnila", "alina", "amna"];
for (var i = 0; i > arr.length; i++) {
    console.log(i);
}
var age = 18;
if (age == 18 || age > 18) {
    console.log("you are allowed");
}
else {
    console.log("you are not allowed");
}
var obj = {
    name1: "shehnila",
    fname: "wahab",
    cell: "9898989",
};
console.log(obj.cell);
function myname(name, age) {
    var others = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        others[_i - 2] = arguments[_i];
    }
    return name + age + others;
}
var result = myname("sehnila", 18, "989898", 78);
console.log(result);
