//creating server
const http=require("http")
const fs =require("fs")
const path =require('path')
//console.log(http)
const server=http.createServer((request,response)=>{
  //console.log(request.method)
  //const path=request.url
  //response.write("hi")
  //response.write(`You made a request to ${path}`)//gives path
  //response.write(`<h1> I'm a heading </h1>`)//sending html to server
  const markup=fs.readFileSync(path.resolve('./index.html'))
  response.write(markup)
  response.end()
})//it creates server
//request.url
//request.headers
//request.methods

server.listen(3000,()=>{
  console.log(`Server Listening at PORT: $(3000)`)
})//to start server
//http is built in nodejs module,