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

// let promise = new Promise(function(resolve, reject) {
// setTimeout(()=> resolve("done"),2000);    
// });

//   promise.then(
//     result => console.log(result),
//     error=> console.log(error)
//   )


// const mypromise = new Promise((res,rej)=>{

//   let students ={
//     name : 'akshat',
//     city : 'pune'
//   }
// let isfetched = true;
// if(isfetched){
//   // res("Resolved")
//   res(students)
// }else{
//   rej("error fetching user data, try again later ....")
// }
// });

// // have to pass the function as the argument in the resolve and reject both 

// // then is used for resolve and catch is used for reject
// // then function is used to get the vvalue from the resolve function 
// mypromise.then(function (value){  // we have to pass the argument to fetch the value of resolve 
//   console.log(value) 
// }).catch(function(error){              // we have to pass the argument to fetch the valiue of the reject 
//   // console.log("something went wrong")
//   console.log(error)
// })


// -------------------------------
// functions returs a promise

function getuser(){
  // const mypromise = new Promise((res,rej)=>{
    return new Promise((res,rej)=>{

      let students ={
        name : 'akshat',
        city : 'pune'
      }
      let isfetched = false;
      if(isfetched){
        res(students)
      }else{
        rej("Error fetching the user data, try again later ....")
      }
    });
    // return mypromise;
}


// const result = getuser()   // it returns the promise not the value 
// console.log(result)

// to get the value we can use getuser() function with then 

getuser().then((value)=>{
console.log(value)
}).catch((error)=>{
console.log(error)
})