/*const express=require('express')
const app=express()

app.get('/server.js', (req,res) =>{
  //console.log(req)
  res.send('This is response')
})
app.get('/login', (req,res) =>{
  //console.log(req)
  res.send('This is login')
})
app.get('/signup', (req,res) =>{
  //console.log(req)
  res.send('This is signup')
})
app.listen(3000,()=>{
  console.log("server listening at port 3000")
})*/

const data=[{name:"Mrunal"},{name:"Chinmay"},{name:"Akash"}]
const express=require('express')
const app=express()
app.get('/getnames',(req,res)=>{
  res.send(data)
})

app.listen(3000,()=>{
  console.log("server listening at port 3000")
})   
