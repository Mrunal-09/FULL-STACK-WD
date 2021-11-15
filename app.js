//promises
//it does not need a callback
//created using constructor
/*let value=new Promise((resolve,reject)=>(
   setTimeout(()=>{
     resolve("Hello")

   },3000)
))
console.log(value)
setTimeout(()=>{
  console.log(value)
},4000)*/

/*let response=fetch("https://jsonplaceholder.typicode.com/users").then(data=>{
console.log(data) //gives response no data
let parsedata=data.json()
console.log(parsedata)//returns promise with data
return parsedata
}).then(data=>{console.log(data)})//gives data*/

let response=fetch("https://jsonplaceholder.typicode.com/users").then(data=> data.json()).then(data=>{console.log(data)})