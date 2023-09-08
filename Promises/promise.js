// asyncronous program
//setTimeout(function yo(){
//console.log("john")
//},1000)
//console.log("hello")

//With asynchronous programming, JavaScript programs can start long-running tasks,
// and continue running other tasks in paralell.

//But, asynchronus programmes are difficult to write and difficult to debug.
//Because of this, most modern asynchronous JavaScript methods don't use callbacks.
//Instead, in JavaScript, asynchronous programming is solved using Promises instead.

//A Promise is a JavaScript object that links producing code and consuming code


//let  mypromise = new Promise(function (myResolve,MyReject){
//
//    myResolve();
//    MyReject();
//});
//
//mypromise.then(
//    function(value){ console.log("hello")},
//    function(erroe){console.log("error")}
//);

let promise = new Promise(function(resolve, reject) {
setTimeout(()=> resolve("done"),2000);    
});

  promise.then(
    result => console.log(result),
    error=> console.log(error)
  )