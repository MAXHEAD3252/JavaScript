// hoisting
function codeHoist(){
    a = 10;
    let b = 50;
    // return b
}
codeHoist();
 
console.log(a); // 10
console.log(b); // ReferenceError : b is not defined  

// console.log(codeHoist());

// we used to declare b with let and it scope changes to local so it cannot be accessed outside of the function 
// There’s a difference between ReferenceError and undefined error. An undefined error occurs 
// when we have a variable that is either not defined or explicitly defined as type undefined.
// ReferenceError is thrown when trying to access a previously undeclared variable. 

fun();
function fun() {
	console.log('Hello World');
}

// hoisting means JavaScript's default behavior of moving all declarations to the top of the current scope
// a variable can be used before it has been declared.

// fun();  // this will give the error because hoisting is only used on declarations not on expressions

// let fun = function() {
//     console.log('Hello world');
// }