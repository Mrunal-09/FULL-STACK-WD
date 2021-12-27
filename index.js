const { error } = require('console')
const fs=require('fs')
//console.log(fs)
console.log('hi1')
fs.readFile('./test.txt',(error,data)=>{
  if(error)console.log(error)
  else console.log(data.toString()) //to convert buffer to string
}) //reads file//nonblocking
console.log('hi2')
console.log(fs.readFileSync('./test.txt','utf8'))//utf8 gives encoded version of string-(reads file) //blockling
console.log('hi3')

fs.writeFile('./test.txt','hello',(error)=>{
  if(error)console.log(error)
})//to write in file