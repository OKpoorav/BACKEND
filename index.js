require('dotenv').config() 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('twitter')
})
app.get('/login',(req,res)=>{
    res.send('<h1>pls login </h1>')
})
app.get('/booboo',(req,res)=>{
    res.send('booboo')
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`) 
})