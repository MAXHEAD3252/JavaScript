const http = require('http')
const Dt = require('./Date_module')

http.createServer(function (req,res){
res.writeHead(200,{'content-type':'text/html'})
res.write("THe current Date and Time is"+Dt.DateModule())
res.end()
}).listen(3000)