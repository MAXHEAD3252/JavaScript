// objects 
//empty object 

let ob = new Object();                 // object constructor syntax
let li = {};                           // litral object syntax



let user = {                           // object 
    name: "akshat",                    // key name and value "akshat"
    age : 21,                          // key age and value 21
    "hello world" : 1                  // we can use the multiword property names it should be quated
                                       // value can be of any type
                                       // last property can may end with , comma or not its optional 
};



console.log("name = "+ user.name);     // object properties ca be accesed by " . " notation 
console.log("name = "+ user.age);    
  


user.gender = "Male";                  // key and value can be add like this 
user.sub = true;
console.log("name = "+ user.gender);
console.log("sub = "+ user.sub);



delete user.sub;                       // delete operator 



console.log("hello world = "+user["hello world"]); // multiword property can be accesed by using square brackets 
user["hello world"] = 2
delete user["hello world"];




let key = "yo";                       // multiword can also be accessed like this stored in a value of variable 
user[key] = "hi";
console.log("yo = "+user["yo"]);



let fruit = "apple";  
let bag = {
    [fruit]:5,                        // the key name can be also declared like this stored in a variable 
};
console.log("fruit ="+bag.apple);


let b = 'apple';                     // to complicate the things we can also use the varable string as name 
                                     // and concatinate it with a other string
let ba = {
    [b+"yo"]:5,
}
console.log("appleyo ="+ba["appleyo"]);  


function makeuser(name,age) {
    return {
        name : name,
        age : age
    };
};

console.log(makeuser("john",12));  // can do anything 



// object Refference 

let d = {
    size : 10,
    epname : "Akshat",
};

let e = d;
console.log(`Size = ${e.size}, Epname = ${e.epname}`);

// calculator 
let s = () => {
    return cal.a+cal.b;
}
let cal = {
    a:1,
    b:2,
}
console.log(s());

// 
