// JavaScript is a synchronous (Moves to the next line only when the execution of the current line is completed)
// and single-threaded (Executes one command at a time in a specific order one after another serially) language.

var number = 2;
function Square (n) {
    var res = n * n;
    return res;
}
var newNumber = Square(3);  

// behind the seen 
// memory component:  number = undefined,function = full code , newnumber = undefined
// code component 
// memory number =2 , new number =4 
// code  n*n