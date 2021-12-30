const express = require("express")
const PORT=3000
const app=express()
//console.log(express)

const verify =(req,res,next)=>{
  if (req.headers['user-agent']==="Thunder Client (https://www.thunderclient.io)") next()
  else res.send("BLOCKED")
} //middleware is executed before callback,it is there to make actual function clutterfree
//each request has to go through middleware
app.get('/',verify,(req,res)=>{
  res.send("Verified")
})


app.listen(PORT,()=>{
  console.log(`Server running at port $(PORT)`)
})
