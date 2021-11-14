//object methods
let car={ //car is a object
  name:"Alto",
  print:()=>{
    console.log(car.name)
  }
}
console.log(Object.keys(car))
console.log(Object.values(car))
console.log(Object)
console.log(car.hasOwnProperty('name'))

//promises
// promise is a object..in js everyting is a object

//settimeout
setTimeout(()=>{
    console.log("kiran")
},5000)
//1 sec=1000
console.log("hi")

var data=fetch("https://jsonplaceholder.typicode.com")
console.log(data)