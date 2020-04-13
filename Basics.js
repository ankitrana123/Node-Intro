const express = require('express')

const app = express()

console.log("hi")
 app.get('/name',(req,res)=>{
     res.send('hi Ankit here!')
 })

app.get('/', (req, res) => {
    res.send('<h1>hello !!!</h1>')
})


app.get('/', (req, res) => {
    res.send('why are you here ?')
})


app.listen(3235)