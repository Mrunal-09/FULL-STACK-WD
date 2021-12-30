const express = require("express")
const PORT=3000
const app=express()

app.use(express.json())//used as middleware ,same as that of json.parse ..giving data of req body

app.post('/signup',express.json(),(req,res)=>{
    console.log(req.body)
    res.send('dadada')
})


app.listen(PORT,()=>{
  console.log(`Server running at port $(PORT)`)
})
//data added to request header/body in thunderclient is seen in terminal running req