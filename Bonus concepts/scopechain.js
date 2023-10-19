 // Global Scoped Variable
 var global_variable = "GeeksforGeeks";
  
 // First function...
 function first_function() {
     return global_variable;
 }

 // Second function...
 function second_function() {
     return first_function();
 }

 console.log(second_function());

  // Global variable
  var global_variable = 20;
  
  function main_function() {
      // Local Variable
      var local_variable = 30;

      var nested_function = function () {

          // Display the value inside the local variable
          console.log(local_variable);
      }

      var another_nested_function = function () {
            
          // Displays the value inside the global variable
          console.log(global_variable);
      }

      nested_function();
      another_nested_function();
  }

  main_function();