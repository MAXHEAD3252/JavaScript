const fs = require('fs')

// to create and write content on a file
// fs.writeFileSync('hello.txt','hello, welcome', (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('file created');
//     }
// })

// to reade a file on the browser server

const http = require('http')
http.createServer((req,res)=>{
    // to read the file
    // fs.readFile('hello.txt',(err,data)=>{
    //     res.writeHead(200,{'Content-Type':'text/html'})
    //     res.write(data)
    //     return res.end()
    // })

    // to append data into files 
    // fs.appendFile('hello.txt','fuck u',(err)=>{
    //     if(err){
    //         console.log('file not appended error...')
    //     }else{
    //     console.log('file appended...')
    //     }
    // })

    //to rename the file 
    // fs.rename('hello.txt','yoo.txt',(err)=>{
    //     if(err){
    //         console.log('error changin file name...')
    //     }
    //     else{
    //         console.log('file name changed...')
    //     }
    // })
    
}).listen(3000)

// const http = require('http')
// http.createServer(function(req,res){
// res.writeHead(200,{'Content-Type':'text/html'})
// res.write('hello world')
// res.end()
// }).listen(3000);