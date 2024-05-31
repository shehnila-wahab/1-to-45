let arr = ["shehnila","alina","amna"]
for(let i = 0;i>arr.length;i++){
console.log(i);

}


let age:number= 18;
if(age==18 || age> 18 ){
    console.log("you are allowed");
    
}else{
    console.log("you are not allowed");
    
}
let obj ={
    name1:"shehnila",
    fname:"wahab",
    cell:"9898989",
}
console.log(obj.cell);
function myname(name:string, age :number , ...others ){
    return name + age + others
    
}
let result = myname("sehnila",18,"989898", 78)
console.log(result)



