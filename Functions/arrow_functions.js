

// normal functions 
let a = function(a,b){ return a+b; }

console.log(a(1,2));

// arrow functions 

let b = (a,b) => a+b;
console.log(b(1,2));

let c = () => 1;
console.log(c());


let d = () => console.log("hello functions !");
d();


let age = 18;
let result = (age >= 18)?
() => console.log("passed") : 
() => console.log("failed");

result();



let aged = 18 ;
let func = () => {
if (age >= 18){
    console.log("Passed");
}
else 
{
    console.log("Failed");
}
}

func();