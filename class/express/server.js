const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Home',(req,res)=>{
    res.send("welcome to home.")
})

app.get('/Login',(req,res)=>{
    res.send("login page.")
})

app.get('/Logout',(req,res)=>{
    res.send("logout page.")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
