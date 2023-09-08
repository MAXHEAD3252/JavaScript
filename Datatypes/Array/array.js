// arrays
// creation of empty array 
let a = new Array();
let b = [];

//Integer array 
let arr = [1,2,3,4];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

console.log("\n");

//string array 

let ar = ["a","b","c","s"];
console.log(ar[0]);
console.log(ar[1]);
console.log(ar[2]);
console.log(ar[3]);

console.log("\n");

// array length

console.log("length = "+arr.length);

console.log("\n");

// array can store value of any type
//          string       object       boolean   function      method
let any = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];
console.log("String ="+any[0]);
console.log("Object ="+any[1]);
console.log("Boolean ="+any[2]);
console.log("Method ="+any[3]);


// pre defined function son array 

//pop
let fruits = ["Apple", "Orange", "Pear"];
console.log(fruits);
fruits.pop(); // remove "Pear" and print it
console.log(fruits);

//push 
fruits.push("Pear"); // add "pear" and print it
console.log(fruits);


// by refference 

let ba = ["banana"];
let aar = ba;
aar.push("Pear");
console.log(aar);

// shift 
let t = ["a","b","c","d"];
console.log(t);
t.shift();
console.log(t);
t.unshift();
console.log(t);


// loop for ... of 

for (let f of t){
console.log(f);
}

// splice method for array can do insert, remove, add

let ary = ["i","am","rahul","singh"];
ary.splice(0,1);
console.log(ary);
ary.splice(0,0,"i","am","rahul");
console.log(ary);
ary.splice(1,2);
console.log(ary);

//slice method for array It returns a new array copying to it all items from index start to end (not including end).
//Both start and end can be negative, in that case position from array end is assumed.

console.log(ary.slice(0,3));
//copy from -3 till end
console.log(ary.slice(-3));

// cuncat creates a new array that includes values from other arrays and additional items.
console.log(arr.concat([5,6]));

