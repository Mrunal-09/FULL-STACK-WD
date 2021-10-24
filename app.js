//function
function greet(operation,a,b){
  console.log(operation,a+b)
}
greet('addition',1,2)

function hi(Name='John',age=19){
  console.log("Hey my name is "+ Name +" and my age is "+ age +".")
}
hi(Name='Mrunal',age=20)
//nan=not a number
var add=function(a=1,b=2){
  //function expression
  var sum=a+b;
  console.log(sum)
}
add()
//diff between funtion expression and declaration is that func called before or after ..decl prints before also
//expression>declaration

var add=(a=1,b=2)=>{
  //function expression
  var sum=a+b;
  console.log(sum)
}
add()
//arrow function