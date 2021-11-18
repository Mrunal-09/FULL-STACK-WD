/*fetch("https://jsonplaceholder.typicode.com/users")
.then(value=>value.json())
.then(data=>{
  console.log(data)
//gives whole data
data.forEach(user => {
  console.log(user)
  
})
})*/

const fetchdata=async()=>{
  const response=await fetch("https://jsonplaceholder.typicode.com/users")
  console.log(response)
  const data=await response.json
  console.log(data)
}
fetchdata()