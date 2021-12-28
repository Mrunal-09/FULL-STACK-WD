//Routes
const http=require("http")
const fs =require("fs")
const path =require('path')

const server=http.createServer((request,response)=>{
  const {url}=request
  if (url=='/login'){
    response.write(`<h1>Login</h1>`)
    response.end()
  }
  if (url=='/signup'){
    response.write(`<h1>Sign Up</h1>`)
    response.end()
  }
})//if you add /login to localhost:3000 response will be login 

server.listen(3000,()=>{
  console.log(`Server Listening at PORT: $(3000)`)
})