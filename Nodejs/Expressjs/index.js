var express = require('express')
var app = express()
const port = 3000
app.get('/',(req,res)=>{
    res.send('hello world')
})

app.post('/',(req,res)=>{
    res.send('yoo..')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

