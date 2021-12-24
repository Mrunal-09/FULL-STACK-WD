//console.log(document)//works only in dom
//console.log(Window) //only in dom-browser
//setTimeout(() => {
 // console.log('hi')
//},5000) //set timeout runs in v8 engine
const greet=()=>{}
module.exports.something=greet
console.log('hello')
const add=(a,b)=>{
  let z= a+b
  console.log(z)
}
const sub=()=>{
  console.log("I subtract")
}
module.exports.add=add //function is exported
module.exports.sub=sub
