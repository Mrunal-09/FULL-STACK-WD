var a=22
let b=24
console.log(a)
console.log(b)

if (true){
  let Name="Ferrari"
  console.log(Name)
}
//console.log(Name)
//let variable has scope only where its declared
//var vriable has global scope

for(var i=0;i<10;i++){
  console.log(i)
}
console.log(i)
if (true){
  let Name="Ferrari"
  if(true){
    console.log(Name)
  }
}
const print =()=>{
  var x="xyz"

  if(true){
    console.log(x)
}
return x
}
//console.log(x)
print()
//global scope not valid for functions
console.log(this)
//gives alert to window(present parent object)
console.log(this.alert("Hi"))

let car={
 name:"Alto",
 manufacturer:"Benz",
 //print : function(a){ //this. car. both works
  print: (a) =>{ //this. doesnt works
   //console.log(a)
   console.log(car.name+" was manufactured by "+ car.manufacturer+".")
   //console.log(this.manufacturer)..same as car.
 }
}
console.log(car)
console.log(car.name)
console.log(typeof car)//object

car.print()

