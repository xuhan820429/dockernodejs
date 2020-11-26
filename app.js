const express = require('express')
const app = express()

app.listen(3030, ()=>{
    console.log('server is listen on port 8080')
})


app.get('/',(req,res)=>{
    res.json({
        name:'leo',
        age:'21',
        email:'iamleohan@gmail.com'
    })
})