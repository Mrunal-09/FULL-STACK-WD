const express = require("express")
const PORT=3000

const app=express()
console.log(express)
app.get('/',(req,res)=>{
  console.log(req.headers.host)
  if (req.headers['user-agent']==="Thunder Client (https://www.thunderclient.io)")res.send("GET")
  else res.send("BLOCKED")
})
//header is extra info of requests -user-agent,host etc

app.listen(PORT,()=>{
  console.log(`Server running at port $(PORT)`)
})
//module.exports=()=>{}