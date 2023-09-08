// normal x ki power n  function
//let pow = (x,n) =>{
//let result =1 ;
//for(let i = 0; i<n;i++){
//    result *=x;
//}
//return result;
//}
//console.log(pow(2,3));


// now same algo without loop using recursion 

//let pow = (x,n) => {
//    if(n ==1){                    // n is not one so it wil go to else 
//        return x;   
//    }else {
//     return x * pow(x,n-1);       // here x * pow(x,n-1) is returned  so the function is calling itself
//    }
//}
//console.log(pow(2,3));

// in shorter 
function pow(x, n) {
    return (n == 1) ? x : (x * pow(x, n - 1));
  }
  console.log(pow(2,3));