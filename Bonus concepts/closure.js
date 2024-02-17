
// Explanation of closure
/* 1 */        function foo()
/* 2 */         {
/* 3 */             var b = 1;
/* 4 */             function inner(){
/* 5 */                 return b;
/* 6 */             }
/* 7 */             return inner;
/* 8 */         }
/* 9 */         var get_func_inner = foo();         

/* 10 */         console.log(get_func_inner());
/* 11 */         console.log(get_func_inner());
/* 12 */         console.log(get_func_inner());



// Explanation:Interesting thing to note here is from line number 9 to line number 12. 
// At line number 9 we are done with the execution of function foo() and the entire body of function inner() 
// is returned and stored in var get_func_inner, due to the line 7 return inner. 

// [The return statement does not execute the inner function - function is executed only when followed by (), 
// but rather the return statement returns the reference to the function as a function in JavaScript is also an object.]



// We can access the variable b which is defined in function foo() through function inner() 
// as the later preserves the scope chain of enclosing function at the time of execution of enclosing function i.e. 
// the inner function knows the value of b through it's scope chain. 

// This is closure in action that is inner function can have access to the outer function variables as well as all 
// the global variables. 

// conclusion a function which keeps the environment of it parent scope even after the parent function has been executed  