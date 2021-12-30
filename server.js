const express = require("express")
const PORT=3000
const app=express()
//console.log(express)

//const isverified=()=>{}
const isAdmin=(req,res,next)=>{
  if (req.headers.admin==='true') next()
  else res.send('UNAUTHORIZED')
}

app.get('/public',isAdmin,(req,res)=>{
  res.send("I'm a public route")
 
})


app.get('/private',isAdmin,(req,res)=>{
  res.send("I'm a private route")
})


app.listen(PORT,()=>{
  console.log(`Server running at port $(PORT)`)
})
