function Describe_city(nameofcity :string, country : string = "pakistan"){
    return`${nameofcity} is in ${country}`;
}

let city1=Describe_city("karachi","china");
let city2= Describe_city("larkana","america");
 let city3 = Describe_city("pakistan,hyderabad");
 let city4 = Describe_city("dubai","UAE");


 console.log(city1);
 console.log(city2);
 console.log(city3);
 console.log(city4);
