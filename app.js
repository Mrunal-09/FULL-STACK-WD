var add=(a,b)=> a+b
console.log(add(10,20))

const greet=name =>'Hi '+name
console.log(greet('Mrunal'))

//methods to iterate  array
var arr=['eat','code']
var callbackfunction=(element,age,hi)=>{
    console.log(element,age,hi)
}
arr.forEach(callbackfunction)
//called back for each element of array

//arr.forEach(element) => {
//  console.log(element)
//}