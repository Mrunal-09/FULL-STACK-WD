//array methods

var arr=[1,2,3,4]
arr.push(5)
arr.shift()
arr.unshift(6)
//shift removes first element
//unshift adds to first position

console.log(arr)
console.log(arr.slice(2,4))
var arr1=[]
for (var i=0;i<arr.length;i++ ){
  if(arr[i]%2==0)
  arr1.push(arr[i])
}
console.log(arr1)
var arr1=arr.filter((element,index)=>{
  //console.log(element,index)
  if(element>5) return true
})
console.log(arr1)