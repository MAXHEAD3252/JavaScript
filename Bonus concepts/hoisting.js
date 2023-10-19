// hoisting
function codeHoist(){
    a = 10;
    let b = 50;
}
codeHoist();
 
console.log(a); // 10
console.log(b); // ReferenceError : b is not defined  
// we used to declare b with let and it scope changes to local so it cannot be accessed outside of the function 
// There’s a difference between ReferenceError and undefined error. An undefined error occurs 
// when we have a variable that is either not defined or explicitly defined as type undefined.
// ReferenceError is thrown when trying to access a previously undeclared variable. 

fun();

function fun() {
	console.log('Hello World');
}


// fun();  // this will give the error because hoisting is only used on declarations not on expressions

// let fun = function() {
//     console.log('Hello world');
// }