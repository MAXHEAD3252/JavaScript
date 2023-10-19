// syncronous programming  - these are action that gets finish one by one 
//let a = prompt("what is your name");
//let b = prompt("what is ayour age");
//let c = prompt("what is your favorite color");
//
//console.log(a+"is"+b+"year old has "+c+"favorite color");



// asyncronous programming   - these are the actions which are initiated now but get executed later 
//console.log("start"); // gets executed first 
//setTimeout(function (){ 
//    console.log("i am good");  // gets executed second in background 
//},3000)
//console.log("end"); // gets executed third 


// callback function  - callback function is a function which is passed in another function as an argument which is then 
// invoked inside the outer function to complete an action  

//callbacks 


// function mydisplay(som){
//     this.som = som
//     console.log(som)
// }

// function cal(num1,num2, mycallback){
//     let sum = num1+num2
//     mycallback(sum)
// }
// cal(5,5, mydisplay)



function sum(first, second, callback) {
    console.log(`The sum of ${first} and ${second} 
                is ${first + second}.`);
    callback();
}

function disp() {
    console.log('This must be printed after addition');
}

sum(5, 6, disp);  