// node js modules
// modules are same javascript libraries
// a set of function u want to include in ur application  

// types of modules
// Built-in Modules   pre included when node is installed 
// Local Modules      created by our-selfs 
// Third-party Modules available online can be installed using npm 


// core modules http , url , fs , process , os , path timers  thesse are built in 
// third part modules are  express , angular , react mongoose 

// built in module
var http = require('http');
http.createServer(function(req,res){
res.writeHead( 200, {'content-Type':'text/html'});
res.write("Hello Akshat");
res.end()
}).listen(3000);

